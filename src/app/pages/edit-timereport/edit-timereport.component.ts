import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InputfieldComponent } from 'app/components/inputfield/inputfield.component';
import { TimeReportService } from 'app/services/timereport.service';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-edit-timereport',
  templateUrl: './edit-timereport.component.html',
  imports: [InputfieldComponent, CommonModule, FormsModule],
  standalone: true,
})
export class EditTimereportComponent implements OnInit {
  reportId!: string;
  project: string = '';
  description: string = '';
  hours: string = '';
  date: string = '';
  userId: string = '';

  originalProject: string = '';
  originalDescription: string = '';
  originalHours: string = '';
  originalDate: string = '';

  loading: boolean = true;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reportService: TimeReportService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.reportId = this.route.snapshot.paramMap.get('id')!;
    this.userId = this.authService.getUserId();
    this.getReport();
  }

  getReport(): void {
    this.reportService.getReportById(this.reportId).subscribe({
      next: (data) => {
        this.originalProject = data.project || '';
        this.originalDescription = data.description || '';
        this.originalHours = data.hoursWorked?.toString() || '';
        this.originalDate = data.date?.substring(0, 10) || '';

        this.project = this.originalProject;
        this.description = this.originalDescription;
        this.hours = this.originalHours;
        this.date = this.originalDate;
        this.userId = data.userId;

        this.loading = false;
      },
      error: () => {
        this.error = 'Could not load report.';
        this.loading = false;
      },
    });
  }

  onSubmit(): void {
    const updatedData = {
      project: this.project,
      description: this.description,
      hoursWorked: parseFloat(this.hours),
      date: this.date,
      userId: this.userId,
    };

    this.reportService.updateReport(this.reportId, updatedData).subscribe({
      next: () => {
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['/all-reports']);
          });
      },
      error: () => {
        this.error = 'Could not update report.';
      },
    });
  }

  onCancel(): void {
    window.history.back();
  }
}

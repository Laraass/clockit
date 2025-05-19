import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TimeReportService } from 'app/services/timereport.service';
import { BackButtonComponent } from 'app/components/back-button/back-button.component';
import { EditButtonComponent } from 'app/components/edit-button/edit-button.component';
import { DeleteButtonComponent } from 'app/components/delete-button/delete-button.component';

@Component({
  selector: 'app-specific-timereport',
  standalone: true,
  imports: [
    CommonModule,
    BackButtonComponent,
    EditButtonComponent,
    DeleteButtonComponent,
  ],
  templateUrl: './specific-timereport.component.html',
})
export class SpecificTimereportComponent implements OnInit {
  reportId!: string;
  report: any;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private reportService: TimeReportService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.reportId = params.get('id')!;
      this.fetchReport();
    });
  }

  fetchReport() {
    this.reportService.getReportById(this.reportId).subscribe({
      next: (data) => {
        this.report = data;
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Report not found.';
      },
    });
  }
}

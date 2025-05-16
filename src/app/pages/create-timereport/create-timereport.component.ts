import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BackButtonComponent } from 'app/components/back-button/back-button.component';
import { ButtonComponent } from 'app/components/button/button.component';
import { InputfieldComponent } from 'app/components/inputfield/inputfield.component';
import { TimeReportService } from 'app/services/timereport.service';

@Component({
  selector: 'app-create-timereport',
  templateUrl: './create-timereport.component.html',
  imports: [
    InputfieldComponent,
    ButtonComponent,
    BackButtonComponent,
    CommonModule,
    FormsModule,
  ],
  standalone: true,
})
export class CreateTimereportComponent {
  formData = {
    date: '',
    project: '',
    hoursWorked: '',
    description: '',
  };

  onCancel(): void {
    window.history.back();
  }

  errorMessage: string | null = null;

  constructor(
    private reportService: TimeReportService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.errorMessage = null;

    const { project, hoursWorked, date } = this.formData;

    // Validation
    if (!project || !hoursWorked || !date) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    const token = localStorage.getItem('authToken');
    if (!token) {
      this.errorMessage = 'You must be logged in to create a report.';
      return;
    }

    this.reportService.createReport(this.formData).subscribe({
      next: (res) => {
        console.log('Time report created:', res);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Wrong when creating time report:', err);
        this.errorMessage =
          err.error?.message || 'Something went wrong. Please try again.';
      },
    });
  }
}

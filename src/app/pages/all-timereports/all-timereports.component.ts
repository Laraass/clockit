import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeReportService } from 'app/services/timereport.service';
import { TimeReportComponent } from 'app/components/time-report/time-report.component';
import { BackButtonComponent } from 'app/components/back-button/back-button.component';

@Component({
  selector: 'app-all-timereports',
  standalone: true,
  imports: [
    CommonModule,
    TimeReportComponent,
    BackButtonComponent,
    TimeReportComponent,
  ],
  templateUrl: './all-timereports.component.html',
})
export class AllTimereportsComponent implements OnInit {
  reports: any[] = [];
  errorMessage: string | null = null;

  constructor(private reportService: TimeReportService) {}

  ngOnInit(): void {
    this.reportService.getAllReports().subscribe({
      next: (data) => {
        this.reports = data;
      },
      error: (err) => {
        console.error('Error fetching reports', err);
        this.errorMessage = err.error?.message || 'Could not load reports.';
      },
    });
  }
}

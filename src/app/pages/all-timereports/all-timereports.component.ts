import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeReportService } from 'app/services/timereport.service';
import { TimeReportComponent } from 'app/components/time-report/time-report.component';
import { BackButtonComponent } from 'app/components/back-button/back-button.component';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ButtonComponent } from 'app/components/button/button.component';

@Component({
  selector: 'app-all-timereports',
  standalone: true,
  imports: [
    CommonModule,
    TimeReportComponent,
    BackButtonComponent,
    ButtonComponent,
  ],
  templateUrl: './all-timereports.component.html',
})
export class AllTimereportsComponent implements OnInit, OnDestroy {
  reports: any[] = [];
  errorMessage: string | null = null;
  private routerSubscription!: Subscription;

  constructor(
    private reportService: TimeReportService,
    private router: Router
  ) {}

  // Navigate to create time report page
  goToCreateReport(): void {
    this.router.navigate(['/create-report']);
  }

  ngOnInit(): void {
    this.loadReports();

    // Load reports after changes
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loadReports();
      });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  loadReports(): void {
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

  handleDeleted(deletedId: string) {
    this.reports = this.reports.filter((report) => report._id !== deletedId);
  }
}

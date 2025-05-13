import { Component, Input } from '@angular/core';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { EditButtonComponent } from '../edit-button/edit-button.component';

@Component({
  selector: 'app-time-report',
  templateUrl: './time-report.component.html',
  imports: [DeleteButtonComponent, EditButtonComponent],
})
export class TimeReportComponent {
  @Input() project: string = '';
  @Input() date: string = '';
  @Input() hoursWorked: string = '';
  @Input() description: string = '';
  @Input() projectId: string = '';

  get formattedDate(): string {
    return new Date(this.date).toLocaleDateString('sv-SE');
  }

  // Navigating to the detailed report using the projectId
  navigateToReport() {
    window.location.hash = `#/timereports/${this.projectId}`;
  }
}

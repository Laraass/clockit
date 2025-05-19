import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TimeReportService } from 'app/services/timereport.service';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
})
export class DeleteButtonComponent {
  @Input() projectId: string = '';
  @Output() deleted: EventEmitter<string> = new EventEmitter<string>();

  constructor(private reportService: TimeReportService) {}

  deleteProject(event: Event) {
    event.stopPropagation();

    if (!this.projectId) return;

    this.reportService.deleteReport(this.projectId).subscribe({
      next: () => {
        this.deleted.emit(this.projectId);
      },
      error: (err) => {
        console.error('Error deleting report', err);
      },
    });
  }
}

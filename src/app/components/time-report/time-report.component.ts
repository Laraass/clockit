import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { EditButtonComponent } from '../edit-button/edit-button.component';
import { Router } from '@angular/router';

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

  @Output() deleted: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {}

  get formattedDate(): string {
    return new Date(this.date).toLocaleDateString('sv-SE');
  }

  // Navigating to the detailed report using the projectId
  navigateToReport() {
    this.router.navigate(['/report', this.projectId]);
  }

  // Delete
  handleDelete(id: string) {
    this.deleted.emit(id);
  }
}

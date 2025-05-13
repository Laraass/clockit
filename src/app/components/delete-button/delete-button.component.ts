import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
})
export class DeleteButtonComponent {
  @Input() projectId: string = '';
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();

  deleteProject() {
    this.onDelete.emit(this.projectId);
  }
}

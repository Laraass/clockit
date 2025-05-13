import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
})
export class EditButtonComponent {
  @Input() reportId!: string;

  constructor(private router: Router) {}

  navigateToEdit() {
    this.router.navigate([`/timereports/edit/${this.reportId}`]);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
})
export class BackButtonComponent {
  @Input() page: string = 'Back';
  @Input() id?: string;

  goBack(): void {
    window.history.back();
  }
}

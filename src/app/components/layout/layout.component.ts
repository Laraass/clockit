import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-layout',
  imports: [NavbarComponent],
  templateUrl: './layout.component.html',
  standalone: true,
})
export class LayoutComponent {

}

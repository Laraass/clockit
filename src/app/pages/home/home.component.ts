import { Component } from '@angular/core';
import { TaskComponent } from 'app/components/task/task.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}

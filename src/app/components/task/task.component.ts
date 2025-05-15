import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task',
  imports: [RouterLink],
  templateUrl: './task.component.html',
  standalone: true
})
export class TaskComponent {
  @Input() task: string = '';
  @Input() id: string = '';
  @Input() link: string = '';
}

import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'description'
  | 'number'
  | 'date';

@Component({
  selector: 'app-inputfield',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inputfield.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InputfieldComponent {
  @Input() inputType: InputType = 'text';
  @Input() type: 'default' | 'description' = 'default';
  @Input() name!: string;
  @Input() title?: string;
  @Input() placeholder: string = '';
  @Input() icon?: string;
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  // Password visibility
  showPassword: boolean = false;

  get currentInputType(): string {
    return this.showPassword ? 'text' : 'password';
  }

  get isPassword(): boolean {
    return this.inputType === 'password';
  }

  // Email validation
  get isValidEmail(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
  }

  // Password toggle
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}

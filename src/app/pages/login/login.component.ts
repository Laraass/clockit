import { Component } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import { ButtonComponent } from 'app/components/button/button.component';
import { InputfieldComponent } from 'app/components/inputfield/inputfield.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginCredentials, LoginResponse } from 'app/services/auth.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [InputfieldComponent, ButtonComponent, CommonModule, FormsModule],
})
export class LoginComponent {
  user: LoginCredentials = {
    email: '',
    password: '',
  };

  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.errorMessage = null;

    if (!this.user.email || !this.user.password) {
      this.errorMessage = 'Please enter both email and password.';
      return;
    }

    this.authService.login(this.user).subscribe({
      next: (res: LoginResponse) => {
        console.log('Login successful:', res);

        if (res.token) {
          this.authService.saveToken(res.token);
        }

        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        this.errorMessage =
          err.error?.message || 'Login failed. Please try again.';
      },
    });
  }
}

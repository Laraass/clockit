import { Component } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import { ButtonComponent } from 'app/components/button/button.component';
import { InputfieldComponent } from 'app/components/inputfield/inputfield.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [InputfieldComponent, ButtonComponent, CommonModule, FormsModule],
})
export class RegisterComponent {
  user = {
    fullName: '',
    email: '',
    password: '',
  };

  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.errorMessage = null;

    // Validate input
    if (!this.user.fullName || !this.user.email || !this.user.password) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    // At least 2 characters
    if (this.user.fullName.trim().split(/\s+/).length < 2) {
      this.errorMessage = 'Please enter your full name (first and last name).';
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|se|net|org|edu|gov|io|ai)$/i;
    if (!emailRegex.test(this.user.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    // Password length
    if (this.user.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters.';
      return;
    }

    // Register
    this.authService
      .register({
        name: this.user.fullName,
        email: this.user.email,
        password: this.user.password,
      })
      .subscribe({
        next: (res) => {
          console.log('User registered:', res);

          if (res.token) {
            this.authService.saveToken(res.token);
          }

          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Registration failed:', err);
          this.errorMessage =
            err.error?.message || 'Registration failed. Try again.';
        },
      });
  }
}

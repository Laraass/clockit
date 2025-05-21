import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  isMenuOpen = false;
  isLoggedIn = false;
  private authSub!: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngAfterViewInit() {
    this.authSub = this.authService.authStatus$.subscribe((status) => {
      this.isLoggedIn = status;

      // Send to log in if user is not logged in
      if (!status) {
        this.router.navigate(['/login']);
      }
    });
  }

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    if (this.authSub) this.authSub.unsubscribe();
  }
}

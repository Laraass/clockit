import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'environments/environment';
import { LoginCredentials, LoginResponse } from './auth.types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authStatusSubject = new BehaviorSubject<boolean>(this.hasToken());
  authStatus$ = this.authStatusSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Log in
  login(credentials: LoginCredentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${environment.apiUrl}/users/login`,
      credentials
    );
  }

  // Register
  register(userData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users/register`, userData);
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
    this.authStatusSubject.next(true);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.authStatusSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this.hasToken();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }

  getUserId(): string {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.id || user._id || '';
  }
}

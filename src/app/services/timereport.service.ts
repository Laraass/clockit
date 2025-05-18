import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TimeReportService {
  private apiUrl = `${environment.apiUrl}/reports`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Create time report
  createReport(data: any): Observable<any> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post(this.apiUrl, data, { headers });
  }

  // Fetch all time reports
  getAllReports(): Observable<any[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<any[]>(this.apiUrl, { headers });
  }
}

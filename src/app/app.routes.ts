import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { TimeReportComponent } from './components/time-report/time-report.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' }, // Change later
      { path: 'register', component: RegisterComponent },
      { path: 'time-report', component: TimeReportComponent }
    ]
  }
];

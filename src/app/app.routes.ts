import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateTimereportComponent } from './pages/create-timereport/create-timereport.component';
import { AllTimereportsComponent } from './pages/all-timereports/all-timereports.component';
import { SpecificTimereportComponent } from './pages/specific-timereport/specific-timereport.component';
import { EditTimereportComponent } from './pages/edit-timereport/edit-timereport.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'create-report', component: CreateTimereportComponent },
      { path: 'all-reports', component: AllTimereportsComponent },
      { path: 'report/:id', component: SpecificTimereportComponent },
      { path: 'timereports/edit/:id', component: EditTimereportComponent },
    ],
  },
];

import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const REGISTER_ROUTES: Routes = [
  { path: '', component: RegisterComponent },
];

export const LOGIN_ROUTES: Routes = [
  { path: '', component: LoginComponent },
];
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse, RegisterRequest } from './types/types';
import { map, Observable } from 'rxjs';
import { CurrentUser } from '../../shared/models/User';
import { environment } from '../../environments/environment';

const REGISTER_POST_URL = environment.apiUrl+'/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpClient = inject(HttpClient);

  register(registerData: RegisterRequest): Observable<CurrentUser> {
    return this.httpClient
      .post<AuthResponse>(REGISTER_POST_URL, registerData)
      .pipe(map((response) => response.user));
  }
}

//@TODO introduce some interceptor and organise API calls//

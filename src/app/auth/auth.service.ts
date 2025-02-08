import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { AuthResponse, LoginRequest, RegisterRequest } from './types/types'
import { map, Observable } from 'rxjs'
import { CurrentUser } from '../../shared/models/User'
import { environment } from '../../environments/environment'

const REGISTER_POST_URL = environment.apiUrl + '/users'
const LOGIN_POST_URL = environment.apiUrl + '/users/login'
const CURRENT_USER_DATA_URL = environment.apiUrl + '/user'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpClient = inject(HttpClient)

  register(registerData: RegisterRequest): Observable<CurrentUser> {
    return this.httpClient
      .post<AuthResponse>(REGISTER_POST_URL, registerData)
      .pipe(map(this.getUser))
  }

  login(loginData: LoginRequest): Observable<CurrentUser> {
    return this.httpClient
      .post<AuthResponse>(LOGIN_POST_URL, loginData)
      .pipe(map(this.getUser))
  }

  getCurrentUser(): Observable<CurrentUser> {
    return this.httpClient
      .get<AuthResponse>(CURRENT_USER_DATA_URL)
      .pipe(map(this.getUser))
  }

  private getUser(response: AuthResponse): CurrentUser {
    return response.user
  }
}

//@TODO introduce some interceptor and organise API calls//

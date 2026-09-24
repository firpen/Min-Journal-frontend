import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private http = inject(HttpClient);

  login(request: LoginRequest): Observable<unknown> {
    return this.http.post('http://localhost:8080/auth/login', request, { withCredentials: true });
  }

  register(request: LoginRequest): Observable<unknown> {
    return this.http.post('http://localhost:8080/auth/register', request, { withCredentials: true });
  }
}

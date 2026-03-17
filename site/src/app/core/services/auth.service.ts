import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  loginRequest(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, {
      email,
      password,
    });
  }

  registerRequest(nombre: string, email: string, password: string) {
    return this.http.post(`${this.apiUrl}/register`, {
      nombre,
      email,
      password,
    });
  }

  login(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

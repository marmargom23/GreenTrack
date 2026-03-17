import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecomendacionesService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getRecomendaciones(): Observable<any> {
    return this.http.get(`${this.apiUrl}/recomendaciones`);
  }

  addRecomendacion(payload: { mensaje: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/recomendaciones`, payload);
  }
}

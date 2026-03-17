import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConsumoService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getConsumo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/consumos`);
  }

  addConsumo(consumo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/consumos`, consumo);
  }
}

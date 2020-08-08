import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient) {
  }

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>('/api/orders');
  }

  getOrderById(id: number): Observable<any> {
    return this.http.get<any>(`/api/orders/${id}`);
  }

  deleteOrderById(id: number): Observable<void> {
    return this.http.delete<void>(`/api/orders/${id}`);
  }
}

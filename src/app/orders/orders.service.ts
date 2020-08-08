import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private readonly platformId: object) {
  }

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:4200/api/orders`);
  }

  getOrderById(id: number): Observable<any> {
    return this.http.get<any>(`/api/orders/${id}`);
  }

  deleteOrderById(id: number): Observable<void> {
    return this.http.delete<void>(`/api/orders/${id}`);
  }
}

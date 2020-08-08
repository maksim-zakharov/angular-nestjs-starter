import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders$: Observable<any[]>;

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.orders$ = this.ordersService.getOrders().pipe(share());
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersService } from './orders.service';
import { NzTableModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [OrdersComponent],
  providers: [OrdersService],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    NzTableModule
  ]
})
export class OrdersModule { }

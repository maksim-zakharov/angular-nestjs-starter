import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';

@Controller('orders')
export class OrdersController {

  private orders: Order[] = [
    {id: 1, createAt: '123', name: 'Заказ 1'},
    {id: 2, createAt: '123', name: 'Заказ 2'},
    {id: 3, createAt: '123', name: 'Заказ 3'},
    {id: 4, createAt: '123', name: 'Заказ 4'},
    {id: 5, createAt: '123', name: 'Заказ 5'},
    {id: 6, createAt: '123', name: 'Заказ 6'}
  ];

  @Get()
  getAll(): Order[] {
    return this.orders;
  }

  @Get(':id')
  getById(@Param('id') id: number): Order {
    const order = this.orders.find(o => o.id === id);
    if (!order) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Заказ не найден'
      }, HttpStatus.BAD_REQUEST);
    }
    return order;
  }

  @Post()
  create(@Body() newOrder: NewOrder): void {
    const order = {id: new Date().getTime(), createAt: new Date().toLocaleDateString(), ...newOrder};
    this.orders.push(order);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatedOrder: UpdatedOrder): Order {
    let order = this.orders.find(i => i.id === id);
    if (!order) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Заказ не найден'
      }, HttpStatus.BAD_REQUEST);
    }
    order = {...order, ...updatedOrder};

    return order;
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    const order = this.orders.find(i => i.id === id);
    if (!order) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Заказ не найден'
      }, HttpStatus.BAD_REQUEST);
    }

    this.orders = this.orders.filter(i => i.id !== id);
  }
}

interface NewOrder {
  name: string;
}

interface UpdatedOrder extends NewOrder {
  id: number;
}

interface Order extends UpdatedOrder {
  createAt: string;
}

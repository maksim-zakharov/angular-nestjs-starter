import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { NewOrder, Order, UpdatedOrder } from './order.entity';

@Controller('orders')
export class OrdersController {

  constructor(private ordersService: OrdersService) {
  }

  @Get()
  getAll(): Promise<Order[]> {
    console.log('Вызвал апиху');
    return this.ordersService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Order> {
    const order = await this.ordersService.getById(id);
    if (!order) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Заказ не найден'
      }, HttpStatus.BAD_REQUEST);
    }
    return order;
  }

  @Post()
  create(@Body() newOrder: NewOrder): Promise<Order> {
    return this.ordersService.create(newOrder);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatedOrder: UpdatedOrder): Promise<Order> {
    const order = await this.ordersService.getById(id);
    if (!order) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Заказ не найден'
      }, HttpStatus.BAD_REQUEST);
    }
    await this.ordersService.update(id, updatedOrder);

    return order;
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    const order = this.ordersService.getById(id);
    if (!order) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Заказ не найден'
      }, HttpStatus.BAD_REQUEST);
    }

    this.ordersService.delete(id);
  }
}

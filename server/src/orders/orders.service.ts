import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { NewOrder, Order, UpdatedOrder } from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';

@Injectable()
export class OrdersService {

  constructor(@InjectRepository(Order)
              private readonly ordersRepository: Repository<Order>) {
  }

  getAll(): Promise<Order[]> {
    return this.ordersRepository.find();
  }

  getById(id: number): Promise<Order> {
    return this.ordersRepository.findOne(id);
  }

  create(newOrder: NewOrder): Promise<Order> {
    const order = this.ordersRepository.create(newOrder);
    return this.ordersRepository.save(order);
  }

  async update(id: number, updatedOrder: UpdatedOrder): Promise<Order> {
    const order = await this.ordersRepository.findOne({where: {id}});
    if (!order) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Заказ не найден'
      }, HttpStatus.BAD_REQUEST);
    }

    return this.ordersRepository.save({id, ...updatedOrder});
  }

  async delete(id: number): Promise<any> {
    const order = await this.ordersRepository.findOne({where: {id}});
    if (!order) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Заказ не найден'
      }, HttpStatus.BAD_REQUEST);
    }

    return this.ordersRepository.delete(id);
  }
}

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm/index';

export class NewOrder {
  @Column('text')
  name: string;
}

export class UpdatedOrder extends NewOrder {
  @PrimaryGeneratedColumn()
  id: number;
}

@Entity()
export class Order extends UpdatedOrder {
  @CreateDateColumn()
  createDate: string;
}

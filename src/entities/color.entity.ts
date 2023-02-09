import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm"
import { OrderItems } from './orderItems.entity';

@Entity()
export class Color {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  value: string

  @Column()
  haxCode: string

  @OneToOne(() => OrderItems, orderItems => orderItems.color)
  orderItemDetails: OrderItems;
}
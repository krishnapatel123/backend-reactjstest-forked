import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, ManyToOne, OneToMany } from "typeorm"
import { CartItems } from "./cartItems.entity";
import { OrderItems } from './orderItems.entity';
import { Product } from "./product.entity";

@Entity()
export class Color {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  haxValue: string

  @OneToMany(() => OrderItems, orderItems => orderItems.color, { onDelete: 'CASCADE' })
  orderItemDetails: OrderItems[];

  @OneToOne(() => CartItems, cartItems => cartItems.color)
  cartItems: CartItems
}
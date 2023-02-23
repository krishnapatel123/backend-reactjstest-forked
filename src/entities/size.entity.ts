import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, ManyToMany, OneToMany } from "typeorm"
import { OrderItems } from "./orderItems.entity";
import { Product } from "./product.entity";
import { CartItems } from './cartItems.entity';

@Entity()
export class Size {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  value: string

  @OneToMany(() => OrderItems, orderItems => orderItems.size)
  orderItemDetails: OrderItems[];

  @OneToOne(() => CartItems, cartItems => cartItems.size)
  cartItems: CartItems
}
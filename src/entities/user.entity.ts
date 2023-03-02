import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Shipping } from './shipping.entity';
import { Checkout } from './checkout.entity';
import { OrderDetails } from "./orderDetails.entity";
import { Cart } from './cart.entity';

@Entity()
export class UserData {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userName: string

  @Column()
  password: string

  @OneToMany(() => Shipping, (shipping) => shipping.userData)
  shipping: Shipping[]

  @OneToMany(() => Checkout, (checkout) => checkout.userData)
  checkout: Checkout[]

  @OneToMany(() => Cart, cart => cart.userData)
  cart: Cart[]

  @OneToMany(() => OrderDetails, (orderDetails) => orderDetails.userData)
  orderDetails: OrderDetails[]
}
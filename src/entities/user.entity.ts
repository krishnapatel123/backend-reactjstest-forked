import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Shipping } from './shipping.entity';
import { Checkout } from './checkout.entity';
import { OrderDetails } from "./orderDetails.entity";

@Entity()
export class UserData {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Shipping, (shipping) => shipping.userData)
  shipping: Shipping[]

  @OneToMany(() => Checkout, (checkout) => checkout.userData)
  checkout: Checkout[]

  @OneToMany(() => OrderDetails, (orderDetails) => orderDetails.userData)
  orderDetails: OrderDetails[]
}
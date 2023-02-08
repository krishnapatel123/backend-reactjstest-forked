import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm"
import { Shipping } from './shipping.entity';
import { Checkout } from './checkout.entity';

@Entity()
export class UserData {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToOne(() => Shipping, (shipping) => shipping.user)
  shipping: Shipping

  @OneToOne(() => Checkout, (checkout) => checkout.user)
  checkout: Checkout
}
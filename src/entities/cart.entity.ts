import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, Column, OneToOne, JoinColumn } from "typeorm"
import { CartItems } from "./cartItems.entity";
import { UserData } from "./user.entity";
import { Shipping } from './shipping.entity';
import { Checkout } from './checkout.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => UserData, userData => userData.cart)
  userData: UserData | number;

  @Column()
  userDataId: Number;

  @OneToMany(() => CartItems, cartItems => cartItems.cart)
  cartItems: CartItems[];

  @OneToOne(() => Shipping, { nullable: true })
  @JoinColumn()
  shippingDetail: Shipping | number

  @OneToOne(() => Checkout, { nullable: true })
  @JoinColumn()
  checkoutDetail: Checkout | number
}

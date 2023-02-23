import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"
import { CartItems } from "./cartItems.entity";
import { UserData } from "./user.entity";

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => UserData, userData => userData.cart)
  @JoinColumn()
  userData: UserData;

  @OneToOne(() => CartItems, cartItems => cartItems.cart)
  @JoinColumn()
  cartItems: CartItems;
}

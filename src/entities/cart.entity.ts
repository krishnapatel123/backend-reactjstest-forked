import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne, Column } from "typeorm"
import { CartItems } from "./cartItems.entity";
import { UserData } from "./user.entity";

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => UserData, userData => userData.cart)
  userData: UserData;

  @Column()
  userDataId: Number;

  @OneToMany(() => CartItems, cartItems => cartItems.cart)
  cartItems: CartItems[];
}

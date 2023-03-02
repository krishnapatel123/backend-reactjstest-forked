import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm"
import { OrderDetails } from "./orderDetails.entity";
import { UserData } from "./user.entity";

@Entity()
export class Checkout {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  paymentMethod: string

  @Column()
  cardName: string

  @Column()
  cardNumber: string

  @Column()
  expiration: string

  @Column()
  cvvCode: number

  @ManyToOne(() => UserData, userData => userData.checkout, {
    onDelete: "CASCADE",
  })
  userData: UserData | number

  @OneToMany(() => OrderDetails, (orderDetails) => orderDetails.checkoutDetail)
  orderDetail: OrderDetails[]
}
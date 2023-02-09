import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToOne } from "typeorm"
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

  @Column({ type: 'date' })
  expiration: string

  @Column()
  cvvCode: number

  @ManyToOne(() => UserData, userData => userData.checkout, {
    cascade: true,
  })
  @JoinColumn()
  userData: UserData

  @OneToMany(() => OrderDetails, (orderDetails) => orderDetails.checkoutDetails)
  orderDetails: OrderDetails[]
}
export enum paymentMethodList {
  CARD = "credit/debitCard",
  PAYPAL = "paypal",
  BITCOIN = "bitcoin"
}
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"
import { UserData } from "./user.entity";

@Entity()
export class Checkout {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userId: number

  @Column({
    type: "enum",
    enum: paymentMethodList,
    default: paymentMethodList.CARD
  })
  paymentMethod: paymentMethodList

  @Column()
  cardName: string

  @Column()
  cardNumber: string

  @Column({ type: 'date' })
  expiration: string

  @Column()
  cvvCode: number

  @OneToOne(() => UserData, userData => userData.checkout, { cascade: true })
  @JoinColumn()
  user: UserData
}
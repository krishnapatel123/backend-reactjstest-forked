import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, OneToOne } from "typeorm"
import { OrderDetails } from "./orderDetails.entity";
import { UserData } from "./user.entity";

@Entity()
export class Shipping {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  email: string

  @Column()
  phoneNumber: string

  @Column({ type: 'date' })
  deliveryDate: string

  @Column({ type: 'time' })
  convenientTime: string

  @Column()
  city: string

  @Column()
  address: string

  @Column()
  zipCode: string

  @ManyToOne(() => UserData, userData => userData.shipping, {
    onDelete: "CASCADE",
  })
  userData: UserData | number

  @OneToMany(() => OrderDetails, (shippingDetails) => shippingDetails.shippingDetail)
  orderDetail: OrderDetails[]
}
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, OneToMany } from "typeorm"
import { UserData } from "./user.entity";
import { Shipping } from "./shipping.entity";
import { Checkout } from "./checkout.entity";
import { OrderItems } from "./orderItems.entity";

@Entity()
export class OrderDetails {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    default: 0,
    type: "int"
  })
  total: number

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_At: Date;

  @ManyToOne(() => UserData, (userData) => userData.orderDetails, {
    cascade: true,
  })
  userData: UserData

  @ManyToOne(() => Shipping, (shippingDetails) => shippingDetails.orderDetails, {
    cascade: true,
  })
  shippingDetails: Shipping

  @ManyToOne(() => Checkout, (checkoutDetails) => checkoutDetails.orderDetails, {
    cascade: true,
  })
  checkoutDetails: Checkout

  @OneToMany(() => OrderItems, (orderItemDetails) => orderItemDetails.orderDetails)
  orderItemDetails: OrderItems[]
}

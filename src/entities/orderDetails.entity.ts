import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, OneToMany, UpdateDateColumn, OneToOne } from "typeorm"
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

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  updated_At: Date;

  @ManyToOne(() => UserData, (userData) => userData.orderDetails, {
    onDelete: "CASCADE",
  })
  userData: UserData

  @OneToOne(() => Shipping, (shippingDetails) => shippingDetails.orderDetail)
  shippingDetail: Shipping

  @OneToOne(() => Checkout, (checkoutDetails) => checkoutDetails.orderDetail)
  checkoutDetail: Checkout

  @OneToMany(() => OrderItems, (orderItemDetails) => orderItemDetails.orderDetail)
  orderItemDetails: OrderItems[]
}

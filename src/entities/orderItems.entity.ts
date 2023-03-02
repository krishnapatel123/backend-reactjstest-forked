import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from "typeorm"
import { OrderDetails } from './orderDetails.entity';
import { Product } from "./product.entity";

@Entity()
export class OrderItems {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: 1 })
  quantity: number;

  @Column()
  size: number;

  @Column()
  color: number;

  @ManyToOne(() => OrderDetails, (orderDetails) => orderDetails.orderItemDetails, {
    onDelete: "CASCADE",
  })
  orderDetail: OrderDetails | number

  @ManyToMany(() => Product, (product) => product.orderItemDetails)
  products: Product[] | number
}

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
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

  @ManyToOne(() => Product, (product) => product.orderItemDetails)
  products: Product[] | number

  @Column()
  productsId: number;
}

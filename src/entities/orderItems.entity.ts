import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { OrderDetails } from './orderDetails.entity';
import { Product } from "./product.entity";
import { Color } from './color.entity';
import { Size } from './size.entity';

@Entity()
export class OrderItems {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: 1 })
  quantity: number;

  @ManyToOne(() => OrderDetails, (orderDetails) => orderDetails.orderItemDetails, {
    cascade: true,
  })
  orderDetails: OrderDetails

  @ManyToOne(() => Product, (product) => product.orderItemDetails, {
    cascade: true,
  })
  product: Product

  @ManyToOne(() => Color, (color) => color.orderItemDetails, {
    cascade: true,
  })
  color: Color

  @ManyToOne(() => Size, (size) => size.orderItemDetails, {
    cascade: true,
  })
  size: Size
}

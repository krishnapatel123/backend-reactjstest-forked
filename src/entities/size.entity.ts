import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm"
import { OrderItems } from "./orderItems.entity";

@Entity()
export class Size {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  value: string

  @OneToOne(() => OrderItems, orderItems => orderItems.size)
  orderItemDetails: OrderItems;
}
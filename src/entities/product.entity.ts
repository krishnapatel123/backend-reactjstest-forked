import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinColumn } from "typeorm"
import { Brand } from "./brand.entity";
import { Category } from './category.entity';
import { Gender } from './gender.entity';
import { OrderItems } from './orderItems.entity';
import { Size } from './size.entity';
import { Color } from "./color.entity";
import { CartItems } from './cartItems.entity';

export enum productBelongsToType {
  checkoutNewArrivals = 1,
  bestDeal = 2,
  bestSeller = 3,
  none = 4
}

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  productName: string

  @Column('simple-array', { nullable: false })
  productImages: string[];

  @Column('simple-array', { nullable: false })
  productDescription: string[];

  @Column({
    type: "int",
    default: 0,
  })
  productOriginalPrice: number

  @Column({
    default: 0,
    type: "int"
  })
  productCurrentPrice: number

  @ManyToOne(() => Gender, (gender) => gender.products, {
    onDelete: "CASCADE",
  })
  gender: Gender | number

  @ManyToOne(() => Category, (category) => category.products, {
    onDelete: "CASCADE",
  })
  category: Category | number

  @ManyToOne(() => Brand, (brand) => brand.products, {
    onDelete: "CASCADE",
  })
  brand: Brand | number

  @Column('simple-array', { nullable: false })
  size: number[];

  @Column('simple-array', { nullable: false })
  color: number[];

  @Column({
    default: 0,
    type: "int"
  })
  reviewRate: number

  @Column()
  slug: string

  @Column({
    type: "enum",
    enum: productBelongsToType,
  })
  type: productBelongsToType

  @ManyToMany(() => OrderItems, (orderItemDetails) => orderItemDetails.products)
  orderItemDetails: OrderItems[]

  @OneToMany(() => CartItems, (cartItems) => cartItems.products)
  cartItems: CartItems[]
}

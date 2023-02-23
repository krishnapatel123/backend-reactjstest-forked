import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinColumn } from "typeorm"
import { Brand } from "./brand.entity";
import { Category } from './category.entity';
import { Gender } from './gender.entity';
import { OrderItems } from './orderItems.entity';
import { Size } from './size.entity';
import { Color } from "./color.entity";
import { CartItems } from './cartItems.entity';
import { ProductBelongsTo } from "./productBelongsTo.entity";

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
    cascade: true,
  })
  @JoinColumn({ name: 'gender' })
  gender: Gender

  @ManyToOne(() => Category, (category) => category.products, {
    cascade: true,
  })
  @JoinColumn({ name: 'category' })
  category: Category

  @ManyToOne(() => Brand, (brand) => brand.products, {
    cascade: true,
  })
  @JoinColumn({ name: 'brand' })
  brand: Brand

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

  @OneToMany(() => OrderItems, (orderItemDetails) => orderItemDetails.product, { onDelete: 'CASCADE' })
  orderItemDetails: OrderItems[]

  @OneToMany(() => ProductBelongsTo, (productBelongsTo) => productBelongsTo.products, { onDelete: 'CASCADE' })
  productBelongsTo: ProductBelongsTo[]

  @OneToMany(() => CartItems, (cartItems) => cartItems.products, { onDelete: 'CASCADE' })
  cartItems: CartItems[]
  genderId: number;
  categoryId: number;
  brandId: number;
}

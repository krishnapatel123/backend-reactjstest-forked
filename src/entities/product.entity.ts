import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { Brand } from "./brand.entity";
import { Category } from './category.entity';
import { Gender } from './gender.entity';
import { OrderItems } from './orderItems.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  imageMedia: string;

  @Column({
    default: 0,
    type: "int"
  })
  currentPrice: number

  @Column({
    type: "int",
    default: 0,
  })
  originalPrice: number

  @Column('simple-array', { nullable: false })
  sizeId: number[];

  @Column('simple-array', { nullable: false })
  colorId: number[];

  @Column({
    default: false,
    type: "boolean"
  })
  isLike: boolean

  @Column({
    default: false,
    type: "boolean"
  })
  isNewArrival: boolean

  @Column()
  description: string

  @Column({
    default: 0,
    type: "int"
  })
  reviewRate: number

  @Column('simple-array', { nullable: false })
  imageCollections: string[];

  @ManyToOne(() => Brand, (brand) => brand.products, {
    cascade: true,
  })
  brand: Brand

  @ManyToOne(() => Category, (category) => category.products, {
    cascade: true,
  })
  category: Category

  @ManyToOne(() => Gender, (gender) => gender.products, {
    cascade: true,
  })
  gender: Gender

  @OneToMany(() => OrderItems, (orderItemDetails) => orderItemDetails.product)
  orderItemDetails: OrderItems
}

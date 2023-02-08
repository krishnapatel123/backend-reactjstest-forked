import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable } from "typeorm"
import { Brand } from "./brand.entity";
import { Category } from './category.entity';
import { Size } from './size.entity';
import { Gender } from './gender.entity';
import { Color } from "./color.entity";

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

  @Column()
  genderId: number

  @Column()
  brandId: number

  @Column()
  categoryId: number

  @Column()
  sizeId: number

  // @Column('simple-array', { nullable: false })
  // sizeId: number[];

  @Column()
  colorId: number

  // @Column('simple-array', { nullable: false })
  // colorId: number[];

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

  @ManyToOne(() => Brand, (brand) => brand.products)
  brand: Brand[]

  @ManyToOne(() => Category, (category) => category.products)
  category: Category[]

  @ManyToOne(() => Size, (size) => size.products)
  size: Size[]

  @ManyToOne(() => Gender, (gender) => gender.products)
  gender: Gender[]

  @ManyToOne(() => Color, (color) => color.products)
  color: Color[]
}

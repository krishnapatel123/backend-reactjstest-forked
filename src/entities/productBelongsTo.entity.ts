import { Entity, PrimaryGeneratedColumn, OneToMany, Column, OneToOne, ManyToMany, ManyToOne, JoinColumn } from "typeorm"
import { Product } from './product.entity';

enum productBelongsToType {
  checkoutNewArrivals = 1,
  bestDeal = 2,
  bestSeller = 3
}
@Entity()
export class ProductBelongsTo {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: "enum",
    enum: productBelongsToType,
  })
  type: productBelongsToType

  @ManyToOne(() => Product, products => products.productBelongsTo)
  products: Product
}
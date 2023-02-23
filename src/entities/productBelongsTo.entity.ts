import { Entity, PrimaryGeneratedColumn, OneToMany, Column, OneToOne, ManyToMany, ManyToOne } from "typeorm"
import { Product } from './product.entity';

enum productBelongsToType {
  checkoutNewArrivals,
  bestDeal,
  bestSeller
}
@Entity()
export class ProductBelongsTo {
  @PrimaryGeneratedColumn()
  id: number

  @Column('int')
  type: productBelongsToType

  @ManyToOne(() => Product, products => products.productBelongsTo)
  products: Product
}
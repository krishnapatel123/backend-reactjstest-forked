import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm"
import { Cart } from "./cart.entity";
import { Product } from './product.entity';

@Entity()
export class CartItems {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  quantity: number;

  @Column()
  size: number;

  @Column()
  color: number;

  @ManyToOne(() => Product, products => products.cartItems)
  products: Product | number;

  @ManyToOne(() => Cart, cart => cart.cartItems, {
    onDelete: "CASCADE"
  })
  cart: Cart | number
}

import { Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn, ManyToOne, Column, ManyToMany } from "typeorm"
import { Cart } from "./cart.entity";
import { Product } from './product.entity';
import { Size } from "./size.entity";
import { Color } from "./color.entity";

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

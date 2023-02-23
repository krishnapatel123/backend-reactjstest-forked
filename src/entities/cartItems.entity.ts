import { Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn, ManyToOne } from "typeorm"
import { Cart } from "./cart.entity";
import { Product } from './product.entity';
import { Size } from "./size.entity";
import { Color } from "./color.entity";

@Entity()
export class CartItems {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Product, products => products.cartItems)
  products: Product;

  @OneToOne(() => Size, size => size.cartItems)
  @JoinColumn()
  size: Size;

  @OneToOne(() => Color, color => color.cartItems)
  @JoinColumn()
  color: Color;

  @OneToOne(() => Cart, cart => cart.cartItems)
  cart: Cart
}

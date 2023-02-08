import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Product } from "./product.entity";

@Entity()
export class Color {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  value: string

  @Column()
  haxCode: string

  @OneToMany(() => Product, product => product.color, {
    onDelete: 'CASCADE'
  })
  products: Product[];
}
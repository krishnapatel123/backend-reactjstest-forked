import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Product } from "./product.entity";

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  value: string

  @OneToMany(() => Product, product => product.brand)
  products: Product[]
}
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Product } from "./product.entity";

@Entity()
export class Gender {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  slug: string

  @OneToMany(() => Product, product => product.gender)
  products: Product[];
}
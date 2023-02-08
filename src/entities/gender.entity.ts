import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Product } from "./product.entity";

@Entity()
export class Gender {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  value: string

  @OneToMany(() => Product, product => product.brand, { onDelete: 'CASCADE' })
  products: Product[];
}
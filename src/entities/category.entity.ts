import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Product } from './product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  slug: string

  @OneToMany(() => Product, product => product.category, { onDelete: 'CASCADE' })
  products: Product[];
}
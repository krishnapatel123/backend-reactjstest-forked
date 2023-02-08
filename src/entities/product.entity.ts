import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  imagePath: string

  @Column()
  currentPrice: number

  @Column()
  originalPrice: number

  @Column()
  genderId: number

  @Column()
  brandId: number

  @Column()
  categoryId: number

  @Column()
  sizeId: number

  @Column()
  isLike: boolean

  @Column()
  isNewArrival: boolean

  @Column()
  description: string

  @Column()
  reviewRate: number | 0

  @Column()
  imageCollections: Array<[
    {
      id: number;
      imagePath: string;
    }
  ]>
}

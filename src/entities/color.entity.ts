import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Color {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  haxValue: string
}
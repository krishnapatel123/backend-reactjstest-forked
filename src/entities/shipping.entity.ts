import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"
import { UserData } from "./user.entity";

@Entity()
export class Shipping {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  userId: number

  @Column()
  lastName: string

  @Column()
  email: string

  @Column()
  phoneNumber: string

  @Column({ type: 'date' })
  deliveryDate: string

  @Column({ type: 'time' })
  convenientTime: string

  @Column()
  city: string

  @Column()
  address: string

  @Column()
  zipCode: string

  @OneToOne(() => UserData, userData => userData.shipping, { cascade: true })
  @JoinColumn()
  user: UserData
}
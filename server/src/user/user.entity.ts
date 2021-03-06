import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 128})
    name: string

    @Column({length: 255})
    email: string

    @Column({length: 255})
    password: string
}
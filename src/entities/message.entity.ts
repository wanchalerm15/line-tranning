import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('dbo.messages')
export class MessageEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    message: string;

    @Column()
    date: Date;

}
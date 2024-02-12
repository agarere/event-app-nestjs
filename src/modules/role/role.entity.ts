import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({ unique: true })
    name: string;
}
import { Role } from 'src/role/role.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({ unique: true })
    userName: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column({ select: false })
    password: string;

    @ManyToMany(() => Role, { cascade: true, eager: false })
    @JoinTable()
    roles: Role[];
}
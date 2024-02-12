import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/modules/role/role.entity';

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

        @InjectRepository(Role)
        private roleRepository: Repository<Role>
    ) {}


    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findUserById(id: number): Promise<User> {
        return await this.userRepository.findOne({ where: { id } });
    }

    async findUserByUsername (userName: string): Promise<User | undefined> {
        return await this.userRepository.findOne({ where: { userName }, select: ['password'] });
    }

    async createUser(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    async updateCreate(id: number, user: User): Promise<User> {
        const userData = await this.findUserById(id);
        if (userData) {
            userData.firstName = user.firstName;
            userData.lastName = user.lastName;
            userData.email = user.email;
            return await this.userRepository.save(userData);
        }
        return undefined;
    }

    async deleteUser(id: number): Promise<Boolean> {
        const user = await this.findUserById(id);
        if (user) {
            await this.userRepository.remove(user);
            return true;
        }
        return false;
    }

    async assignRoleToUser(userId: number, roleIds: number[]): Promise<User> {
        const user = await this.userRepository.findOne({ where: { id: userId } })

        if (!user) {
            throw new Error("User not found");
        }

        console.log("User:", user)

        const roles = await this.roleRepository.findBy({ id: In(roleIds) });

        console.log("Roles:", roles[0].id)

        user.roles = roles

        return await this.userRepository.save(user);
    }
}

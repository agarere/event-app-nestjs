import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}


    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findUserById(id: number): Promise<User> {
        return await this.userRepository.findOne({ where: { id } });
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
}

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Role } from './role.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoleService {

    constructor (
        @InjectRepository(Role)
        private roleRepository: Repository<Role>
    ) {}

    async findAll(): Promise<Role[]> {
        return await this.roleRepository.find();
    }

    async createRole(role: Role): Promise<Role> {
        return await this.roleRepository.save(role);
    }
}

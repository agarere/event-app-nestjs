import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './role.entity';

@Controller('/api/v1/roles')
export class RoleController {

    constructor(
        private readonly roleService: RoleService
    ) { }

    @Get()
    findAll(): Promise<Role[]> {
        return this.roleService.findAll();
    }

    @Post()
    async createRole(@Body() role: Role): Promise<Role> {
        try {
            return await this.roleService.createRole(role);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: true,
                message: error.detail
            }, HttpStatus.BAD_REQUEST, {
                cause: error
            });
        }
    }
}

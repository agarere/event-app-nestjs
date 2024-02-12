import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CryptoService } from 'src/modules/crypto/crypto.service';

@Controller('/api/v1/users')
export class UserController {

    constructor(
        private readonly userService: UserService,
        private readonly cryptoService: CryptoService
    ) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll(); 
    }

    @Post()
    createUser(@Body() user: User): Promise<User> {
        const hashPassword = this.cryptoService.hashPassword(user.password);
        user.password = hashPassword;
        return this.userService.createUser(user);
    }

    @Get(':id')
    findUserById(@Param('id') id: number): Promise<User> {
        return this.userService.findUserById(id);
    }

    @Post(':id/roles')
    async assignRolesToUser(@Param('id') userId: number, @Body() roleIds: number[]): Promise<User> {
        try {
            return await this.userService.assignRoleToUser(userId, roleIds);
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

    @Delete(':id')
    async deleteUser(@Param('id') userId: number): Promise<Boolean> {
        try {
            return await this.userService.deleteUser(userId);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: true,
                message: error.detail
            },
            HttpStatus.NOT_FOUND, {
                cause: error
            })
        }
    }
}

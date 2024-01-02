import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('/users')
export class UserController {

    constructor(
        private readonly userService: UserService
    ) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll(); 
    }

    @Post()
    createUser(@Body() user: User): Promise<User> {
        return this.userService.createUser(user);
    }
}

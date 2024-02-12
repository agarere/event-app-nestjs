import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('account')
export class AccountController {

    constructor (
        private accountService: AccountService
    ) {}

    @UseGuards(AuthGuard('local'))  
    @Post('login')
    async login (@Request() req) {
        return this.accountService.login(req.user.userName)
    }
}

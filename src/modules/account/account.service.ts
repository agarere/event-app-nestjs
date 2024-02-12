import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class AccountService {

    constructor (
        private jwtService: JwtService,
        private userService: UserService
    ) {}

    async validateUser (userName: string, hashPassword: string): Promise<any> {
        const user = await this.userService.findUserByUsername(userName);

        if (user && user.password === hashPassword) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }

    async login (userName) {
        const payload = {
            userName
        }

        return {
            access_token: this.jwtService.sign({ payload })
        }
    }
}

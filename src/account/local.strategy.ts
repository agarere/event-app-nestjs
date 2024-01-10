import { Strategy } from 'passport-local';
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AccountService } from "./account.service";
import { CryptoService } from "src/crypto/crypto.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor (
        private accountService: AccountService,
        private cryptoService: CryptoService
    ) {
        super({ usernameField: 'userName' });
    }

    async validate (userName: string, password: string): Promise<any> {
        const hashPassword = this.cryptoService.hashPassword(password);
        const user = await this.accountService.validateUser(userName, hashPassword);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}
import { Injectable } from '@nestjs/common';
import { pbkdf2Sync } from 'crypto';

@Injectable()
export class CryptoService {
    hashPassword (password: string): string {
        const derivedKey = pbkdf2Sync(password, "1Ybjn34t", 10000, 64, 'sha512');
        return derivedKey.toString('hex');
    }
}

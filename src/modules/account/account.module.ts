import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/modules/user/user.module';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';
import { CryptoService } from 'src/modules/crypto/crypto.service';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30s' }
    })
  ],
  providers: [
    AccountService,
    LocalStrategy,
    CryptoService
  ],
  controllers: [AccountController],
  exports: [AccountService]
})
export class AccountModule {}

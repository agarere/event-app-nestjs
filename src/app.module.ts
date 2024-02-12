import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './modules/database/database.module';
import { RoleModule } from './modules/role/role.module';
import { CryptoModule } from './modules/crypto/crypto.module';
import { AccountModule } from './modules/account/account.module';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    RoleModule,
    CryptoModule,
    AccountModule
  ]
})
export class AppModule {}

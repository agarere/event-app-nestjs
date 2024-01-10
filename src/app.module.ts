import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { RoleModule } from './role/role.module';
import { CryptoModule } from './crypto/crypto.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [UserModule, DatabaseModule, RoleModule, CryptoModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

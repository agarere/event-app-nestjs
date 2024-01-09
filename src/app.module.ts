import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { RoleModule } from './role/role.module';
import { CryptoModule } from './crypto/crypto.module';

@Module({
  imports: [UserModule, DatabaseModule, RoleModule, CryptoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

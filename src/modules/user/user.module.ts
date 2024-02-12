import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Role } from 'src/modules/role/role.entity';
import { RoleModule } from 'src/modules/role/role.module';
import { CryptoService } from 'src/modules/crypto/crypto.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role]),
    RoleModule,

  ],
  controllers: [UserController],
  providers: [UserService, CryptoService],
  exports: [UserService]
})
export class UserModule {}

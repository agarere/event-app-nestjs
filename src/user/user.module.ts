import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Role } from 'src/role/role.entity';
import { RoleModule } from 'src/role/role.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role]),
    RoleModule
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}

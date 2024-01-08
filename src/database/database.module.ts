import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/role/role.entity';
import { User } from 'src/user/user.entity';

@Module({
    imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'event-app',
      entities: [User, Role],
      synchronize: true,
    })],
  })
export class DatabaseModule {}

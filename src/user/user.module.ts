import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import User from './entities/User';

import { UserController } from './user.controller';

import { UserRepositoryProvider } from './user.repository';

import { UserService } from './services/user.service';
import { SessionService } from './services/session.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, SessionService, UserRepositoryProvider]
})

export class UserModule {}

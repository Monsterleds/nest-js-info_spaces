import { Controller, Post, Body } from '@nestjs/common';
import { IsEmail, Length } from 'class-validator';

import User from './entities/User';

import { UserService } from './services/user.service';
import { SessionService } from './services/session.service';

interface CreateSessionDTO {
  email: string;
  password: string;
}

interface ResponseCreateSession {
  token: string;
  user: User,
}

class CreateUserDTO {
  @IsEmail()
  email: string;

  @Length(6)
  password: string;
}

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly sessionService: SessionService
  ) {}
  
  @Post()
  async createUser(@Body() { email, password }: CreateUserDTO): Promise<User> {
    return await this.userService.create({ email, password });
  }

  @Post('/session')
  async createSession(@Body() { email, password }: CreateSessionDTO): Promise<ResponseCreateSession> {
    return await this.sessionService.create({ email, password });
  }
}

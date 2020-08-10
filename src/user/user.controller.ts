import { Controller, Post, Body } from '@nestjs/common';
import { IsEmail, Length } from 'class-validator';

import User from './entities/User';

import { UserService } from './user.service';

class CreateUserDTO {
  @IsEmail()
  email: string;

  @Length(6)
  password: string;
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Post()
  async createUser(@Body() { email, password }: CreateUserDTO): Promise<User> {
    return await this.userService.execute({ email, password });
  }
}

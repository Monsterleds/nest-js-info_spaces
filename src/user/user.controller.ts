import { Controller, Post, Body } from '@nestjs/common';

import User from './entities/User';

import { UserService } from './user.service';

interface CreateUserDTO {
  email: string;
  password: string;
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Post()
  async createUser(@Body() { email, password }: CreateUserDTO): Promise<User> {
    return await this.userService.create({ email, password });
  }
}

import { Controller, Post, Body } from '@nestjs/common';

import { UserService } from './user.service';

interface RequestCreate {
  email: string;
  password: string;
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() { email, password }: RequestCreate): RequestCreate {
    return this.userService.create({ email, password });
  }
}

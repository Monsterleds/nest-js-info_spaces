import { Injectable } from '@nestjs/common';

import UsersRepositories from './user.repositories';

interface CreateUserDTO {
  email: string;
  password: string;
}

@Injectable()
export class UserService {
  private usersRepositories = new UsersRepositories();

  public async create({ email, password }: CreateUserDTO): Promise<string> {
    const newUser = await this.usersRepositories.create(email, password);

    return newUser;
  }
}

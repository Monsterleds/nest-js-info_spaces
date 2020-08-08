import { Injectable } from '@nestjs/common';

interface CreateUserDTO {
  email: string;
  password: string;
}

@Injectable()
export class UserService {
  public create({ email, password }: CreateUserDTO): CreateUserDTO {
    const user = {
      email,
      password,
    }

    return user;
  }
}

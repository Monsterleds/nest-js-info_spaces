import { Injectable, HttpException } from '@nestjs/common';

import UserRepository from '../user.repository';

import User from '../entities/User';

interface CreateUserDTO {
  email: string;
  password: string;
}

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  public async create({ email, password }: CreateUserDTO): Promise<User> {
    if (!email || !password) {
      throw new HttpException('Email and password is required', 400);
    }

    const user = await this.userRepository.findByEmail(email);

    if (user) {
      throw new HttpException('Email is already registered', 400);
    }

    const newUser = await this.userRepository.createUser({ email, password});

    return newUser;
  }
}

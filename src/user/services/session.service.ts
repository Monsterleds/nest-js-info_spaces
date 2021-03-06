import { Injectable, HttpException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';

import { UserRepository } from '../user.repository';

import User from '../entities/User';

interface CreateSessionDTO {
  email: string;
  password: string;
}

interface ResponseCreateSession {
  token: string;
  user: User,
}

@Injectable()
export class SessionService {
  constructor(
    private userRepository: UserRepository
  ) {}

  public async create({ email, password }: CreateSessionDTO): Promise<ResponseCreateSession> {
    const user = await this.userRepository.findByEmail(email);

    if(!user || !await compare(password, user.password)) {
      throw new HttpException('Email or password does not match', 400);
    }

    const token = sign({}, '33bee61bdc659fcff21f7a9309f1158a', {
      subject: user.id,
      expiresIn: '1d',
    });

    delete user.password;

    return { token, user };
  }
}

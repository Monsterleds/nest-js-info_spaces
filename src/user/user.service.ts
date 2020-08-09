import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import User from './entities/User';

interface CreateUserDTO {
  email: string;
  password: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) 
    private readonly ormRepository: Repository<User>
  ) {}

  
  public async create({ email, password }: CreateUserDTO): Promise<User> {
    const user = {
      id: 'dad',
      email,
      password
    }

    return user;
  }
}

import { Injectable } from '@nestjs/common';
import { Repository, Connection, EntityRepository } from 'typeorm';

import User from './entities/User';

interface CreteUserDTO {
  email: string;
  password: string;
}

interface UserRepositoryMethods {
  createUser(credentials: CreteUserDTO): void;
  findByEmail(email: string): Promise<User | undefined>;
}

@Injectable()
@EntityRepository(User)
export class UserRepository extends Repository<User> implements UserRepositoryMethods {
  public async createUser({ email, password }): Promise<User> {
    const user = this.create({ email, password });

    await this.save(user);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.findOne({ where: { email } });

    return user;
  }
}

export const UserRepositoryProvider = {
  provide: 'UserRepository',
  useFactory: (connection: Connection) => connection.getCustomRepository(UserRepository),
  inject: [Connection],
}

export default UserRepository;
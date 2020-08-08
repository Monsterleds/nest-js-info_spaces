import { Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';

import User from './entities/User';

class UsersRepositories {
  @InjectRepository(User)
  private ormRepository: Repository<User>

  public async create(email: string, password: string): Promise<string> {
    const user = this.ormRepository.create({ email, password });

    await this.ormRepository.save(user);

    return 'batata';
  }
}

export default UsersRepositories;
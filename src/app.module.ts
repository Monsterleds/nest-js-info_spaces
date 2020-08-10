import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import User from './user/entities/User';

import { UserModule } from './user/user.module';

import { AppController } from './app.controller';

import { AppService } from './app.service';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "info_spaces",
    migrations: ["__dirname/src/typeorm/migrations/*.ts"],
    cli: {
      "migrationsDir": "__dirname/src/typeorm/migrations"
    },
    synchronize: true,
    entities: [User]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

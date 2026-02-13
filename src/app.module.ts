import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module.js';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model.js';
import { RolesModule } from './roles/roles.module.js';
import { Role } from './roles/roles.model.js';
import { UserRoles } from './roles/user-roles.model.js';
import { AuthController } from './auth/auth.controller.js';
import { AuthService } from './auth/auth.service.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}

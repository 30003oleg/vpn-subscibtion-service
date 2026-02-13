import { Injectable } from '@nestjs/common';
import { User } from './users.model.js';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './create-user.dto.js';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRespository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    return await this.userRespository.create(dto);
  }

  async getAllUsers() {
    return await this.userRespository.findAll();
  }
}

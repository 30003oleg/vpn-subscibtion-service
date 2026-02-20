import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './users.model.js';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './create-user.dto.js';
import { RolesService } from '../roles/roles.service.js';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRespository: typeof User,
    private roleService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto) {
    const existingUser = await this.getUserByTgId(dto.tg_id);
    if (existingUser) {
      return existingUser;
    }

    const user = await this.userRespository.create(dto);
    const role = await this.roleService.getRole('client');
    if (role) {
      await user.$set('roles', [role.id]);
    }
    return user;
  }

  async getAllUsers() {
    return await this.userRespository.findAll({ include: { all: true } });
  }

  async getUserByTgId(tg_id: number) {
    if (!tg_id) {
      console.error('No id');
      return;
    }
    const user = await this.userRespository.findOne({
      where: { tg_id },
      include: { all: true },
    });
    if (!user) {
      return new NotFoundException('No user found');
    }
    return user;
  }
}

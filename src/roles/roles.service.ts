import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './create-role.dto.js';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model.js';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}
  async createRole(dto: CreateRoleDto) {
    return await this.roleRepository.create(dto);
  }

  async getRole(value: string) {
    return await this.roleRepository.findOne({ where: { value } });
  }
}

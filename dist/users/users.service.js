var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable } from '@nestjs/common';
import { User } from './users.model.js';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from '../roles/roles.service.js';
let UsersService = class UsersService {
    userRespository;
    roleService;
    constructor(userRespository, roleService) {
        this.userRespository = userRespository;
        this.roleService = roleService;
    }
    async createUser(dto) {
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
    async getUserByTgId(tg_id) {
        return await this.userRespository.findOne({
            where: { tg_id },
            include: { all: true },
        });
    }
};
UsersService = __decorate([
    Injectable(),
    __param(0, InjectModel(User)),
    __metadata("design:paramtypes", [Object, RolesService])
], UsersService);
export { UsersService };
//# sourceMappingURL=users.service.js.map
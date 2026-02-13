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
let UsersService = class UsersService {
    userRespository;
    constructor(userRespository) {
        this.userRespository = userRespository;
    }
    async createUser(dto) {
        return await this.userRespository.create(dto);
    }
    async getAllUsers() {
        return await this.userRespository.findAll();
    }
};
UsersService = __decorate([
    Injectable(),
    __param(0, InjectModel(User)),
    __metadata("design:paramtypes", [Object])
], UsersService);
export { UsersService };
//# sourceMappingURL=users.service.js.map
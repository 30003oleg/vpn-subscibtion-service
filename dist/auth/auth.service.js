var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';
import { JwtService } from '@nestjs/jwt';
let AuthService = class AuthService {
    userService;
    jwtService;
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(userDto) { }
    async registration(userDto) {
        const candidate = await this.userService.getUserByTgId(userDto.tg_id);
        if (candidate !== null) {
            throw new HttpException('Пользователь с таким Tg ID уже есть', HttpStatus.BAD_REQUEST);
        }
        const user = await this.userService.createUser(userDto);
        return this.generateToken(user);
    }
    generateToken(user) {
        const payload = { id: user.id, tg_id: user.tg_id, roles: user.roles };
        return {
            token: this.jwtService.sign(payload),
        };
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [UsersService,
        JwtService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map
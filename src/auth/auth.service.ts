import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/create-user.dto.js';
// import bcrypt from 'bcryptjs';
import { User } from 'src/users/users.model.js';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: CreateUserDto) {}

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByTgId(userDto.tg_id);
    if (candidate !== null) {
      throw new HttpException(
        'Пользователь с таким Tg ID уже есть',
        HttpStatus.BAD_REQUEST,
      );
    }
    // const hashId = await bcrypt.hash(`${userDto.tg_id}`, 5); // Это оставляю для примера работы с паролями
    const user = await this.userService.createUser(userDto); // Тут подмена пароля на хэш
    return this.generateToken(user);
  }

  generateToken(user: User) {
    const payload = { id: user.id, tg_id: user.tg_id, roles: user.roles };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}

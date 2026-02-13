import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../users/create-user.dto.js';
import { AuthService } from './auth.service.js';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('./login')
  login(@Body() userDto: CreateUserDto) {
    return await this.authService.login(userDto);
  }

  @Post('./registration')
  registration(@Body() userDto: CreateUserDto) {
    return await this.authService.registration(userDto);
  }
}

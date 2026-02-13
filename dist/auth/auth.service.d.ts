import { UsersService } from '../users/users.service.js';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/create-user.dto.js';
import { User } from 'src/users/users.model.js';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(userDto: CreateUserDto): Promise<void>;
    registration(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    generateToken(user: User): {
        token: string;
    };
}

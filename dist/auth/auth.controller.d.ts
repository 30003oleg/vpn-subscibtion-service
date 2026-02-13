import { CreateUserDto } from '../users/create-user.dto.js';
import { AuthService } from './auth.service.js';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userDto: CreateUserDto): void;
    registration(userDto: CreateUserDto): {
        token: string;
    };
}

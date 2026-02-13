import { CreateUserDto } from './create-user.dto.js';
import { UsersService } from './users.service.js';
import { User } from './users.model.js';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(userDto: CreateUserDto): Promise<User>;
    getAll(): Promise<User[]>;
}

import { User } from './users.model.js';
import { CreateUserDto } from './create-user.dto.js';
import { RolesService } from '../roles/roles.service.js';
export declare class UsersService {
    private userRespository;
    private roleService;
    constructor(userRespository: typeof User, roleService: RolesService);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
}

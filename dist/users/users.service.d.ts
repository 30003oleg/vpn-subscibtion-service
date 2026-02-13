import { User } from './users.model.js';
import { CreateUserDto } from './create-user.dto.js';
export declare class UsersService {
    private userRespository;
    constructor(userRespository: typeof User);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
}

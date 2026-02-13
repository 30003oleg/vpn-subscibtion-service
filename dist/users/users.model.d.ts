import { Model } from 'sequelize-typescript';
import { Role } from '../roles/roles.model.js';
interface UserCreationAttributes {
    tg_id: number;
    registeredAt: Date;
}
export declare class User extends Model<User, UserCreationAttributes> {
    id: number;
    tg_id: number;
    username: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    registeredAt: Date;
    roles: Role[];
}
export {};

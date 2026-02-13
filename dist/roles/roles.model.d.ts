import { Model } from 'sequelize-typescript';
import { User } from '../users/users.model.js';
interface RoleCreationAttributes {
    value: string;
    description: string;
}
export declare class Role extends Model<Role, RoleCreationAttributes> {
    id: number;
    value: string | undefined;
    description: string | undefined;
    users: User[];
}
export {};

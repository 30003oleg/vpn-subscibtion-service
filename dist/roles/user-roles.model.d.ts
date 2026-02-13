import { Model } from 'sequelize-typescript';
interface UserRolesCreationAttributes {
    value: string;
    description: string;
}
export declare class UserRoles extends Model<UserRoles, UserRolesCreationAttributes> {
    id: number;
    roleId: number;
    userId: number;
}
export {};

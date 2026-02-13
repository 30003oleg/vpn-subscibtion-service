import { Model } from 'sequelize-typescript';
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
}
export {};

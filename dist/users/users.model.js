var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table, } from 'sequelize-typescript';
import { Role } from '../roles/roles.model.js';
import { UserRoles } from '../roles/user-roles.model.js';
let User = class User extends Model {
    tg_id;
    username;
    firstName;
    lastName;
    registeredAt;
    roles;
};
__decorate([
    ApiProperty({ example: 1, description: 'Уникальный индетификатор' }),
    Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    ApiProperty({ example: 123, description: 'Индетификатор пользователя TG' }),
    Column({ type: DataType.INTEGER, unique: true, allowNull: false }),
    __metadata("design:type", Number)
], User.prototype, "tg_id", void 0);
__decorate([
    ApiProperty({ example: 'SomeUser', description: 'username пользователя' }),
    Column({ type: DataType.STRING, allowNull: true }),
    __metadata("design:type", Object)
], User.prototype, "username", void 0);
__decorate([
    ApiProperty({ example: 'Ivan', description: 'Имя пользователя' }),
    Column({ type: DataType.STRING, allowNull: true }),
    __metadata("design:type", Object)
], User.prototype, "firstName", void 0);
__decorate([
    ApiProperty({ example: 'Ivanov', description: 'Фамилия пользователя' }),
    Column({ type: DataType.STRING, allowNull: true }),
    __metadata("design:type", Object)
], User.prototype, "lastName", void 0);
__decorate([
    ApiProperty({
        example: '2026-02-13 12:35:20.921+03',
        description: 'Дата создания пользователя',
    }),
    Column({ type: DataType.DATE, allowNull: false }),
    __metadata("design:type", Date)
], User.prototype, "registeredAt", void 0);
__decorate([
    BelongsToMany(() => Role, () => UserRoles),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
User = __decorate([
    Table({ tableName: 'users' })
], User);
export { User };
//# sourceMappingURL=users.model.js.map
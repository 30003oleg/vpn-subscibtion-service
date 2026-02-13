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
import { User } from '../users/users.model.js';
import { UserRoles } from './user-roles.model.js';
let Role = class Role extends Model {
    value;
    description;
    users;
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
], Role.prototype, "id", void 0);
__decorate([
    ApiProperty({ example: 'Client', description: 'Обычный клиент' }),
    Column({ type: DataType.STRING, allowNull: true }),
    __metadata("design:type", Object)
], Role.prototype, "value", void 0);
__decorate([
    ApiProperty({
        example: 'Клиент имеющий минимальные права',
        description: 'Описание роли',
    }),
    Column({ type: DataType.STRING, allowNull: true }),
    __metadata("design:type", Object)
], Role.prototype, "description", void 0);
__decorate([
    BelongsToMany(() => User, () => UserRoles),
    __metadata("design:type", Array)
], Role.prototype, "users", void 0);
Role = __decorate([
    Table({ tableName: 'roles' })
], Role);
export { Role };
//# sourceMappingURL=roles.model.js.map
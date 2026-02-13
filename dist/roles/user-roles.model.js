var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, DataType, ForeignKey, Model, Table, } from 'sequelize-typescript';
import { User } from '../users/users.model.js';
import { Role } from './roles.model.js';
let UserRoles = class UserRoles extends Model {
    roleId;
    userId;
};
__decorate([
    Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], UserRoles.prototype, "id", void 0);
__decorate([
    ForeignKey(() => Role),
    Column({ type: DataType.INTEGER }),
    __metadata("design:type", Number)
], UserRoles.prototype, "roleId", void 0);
__decorate([
    ForeignKey(() => User),
    Column({ type: DataType.INTEGER }),
    __metadata("design:type", Number)
], UserRoles.prototype, "userId", void 0);
UserRoles = __decorate([
    Table({ tableName: 'user-roles', createdAt: false, updatedAt: false })
], UserRoles);
export { UserRoles };
//# sourceMappingURL=user-roles.model.js.map
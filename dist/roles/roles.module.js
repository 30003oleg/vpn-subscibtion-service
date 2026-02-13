var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service.js';
import { RolesController } from './roles.controller.js';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './roles.model.js';
import { User } from '../users/users.model.js';
import { UserRoles } from './user-roles.model.js';
let RolesModule = class RolesModule {
};
RolesModule = __decorate([
    Module({
        providers: [RolesService],
        controllers: [RolesController],
        imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
        exports: [RolesService],
    })
], RolesModule);
export { RolesModule };
//# sourceMappingURL=roles.module.js.map
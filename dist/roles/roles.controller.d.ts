import { RolesService } from './roles.service.js';
import { CreateRoleDto } from './create-role.dto.js';
export declare class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
    create(dto: CreateRoleDto): Promise<import("./roles.model.js").Role>;
    getByValue(value: string): Promise<import("./roles.model.js").Role | null>;
}

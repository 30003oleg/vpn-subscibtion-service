import { CreateRoleDto } from './create-role.dto.js';
import { Role } from './roles.model.js';
export declare class RolesService {
    private roleRepository;
    constructor(roleRepository: typeof Role);
    createRole(dto: CreateRoleDto): Promise<Role>;
    getRole(value: string): Promise<Role | null>;
}

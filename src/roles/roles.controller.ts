import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service.js';
import { CreateRoleDto } from './create-role.dto.js';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.rolesService.createRole(dto);
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.rolesService.getRole(value);
  }
}

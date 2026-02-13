import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/users.model.js';
import { UserRoles } from './user-roles.model.js';

interface RoleCreationAttributes {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttributes> {
  @ApiProperty({ example: 1, description: 'Уникальный индетификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({ example: 'Client', description: 'Обычный клиент' })
  @Column({ type: DataType.STRING, allowNull: true })
  value: string | undefined;
  @ApiProperty({
    example: 'Клиент имеющий минимальные права',
    description: 'Описание роли',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  description: string | undefined;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}

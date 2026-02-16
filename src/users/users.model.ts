import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Role } from '../roles/roles.model.js';
import { UserRoles } from '../roles/user-roles.model.js';

interface UserCreationAttributes {
  tg_id: number;
  registeredAt: Date;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttributes> {
  @ApiProperty({ example: 1, description: 'Уникальный индетификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;
  @ApiProperty({ example: 123, description: 'Индетификатор пользователя TG' })
  @Column({ type: DataType.INTEGER, unique: true, allowNull: false })
  tg_id: number;
  @ApiProperty({ example: 'SomeUser', description: 'username пользователя' })
  @Column({ type: DataType.STRING, allowNull: true })
  username: string | undefined;
  @ApiProperty({ example: 'Ivan', description: 'Имя пользователя' })
  @Column({ type: DataType.STRING, allowNull: true })
  first_Name: string | undefined;
  @ApiProperty({ example: 'Ivanov', description: 'Фамилия пользователя' })
  @Column({ type: DataType.STRING, allowNull: true })
  last_Name: string | undefined;
  @ApiProperty({
    example: '2026-02-13 12:35:20.921+03',
    description: 'Дата создания пользователя',
  })
  @Column({ type: DataType.DATE, allowNull: false })
  registeredAt: Date;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}

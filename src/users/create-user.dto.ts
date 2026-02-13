import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: '123', description: 'Индетификатор пользователя TG' })
  readonly tg_id: number;
  @ApiProperty({
    example: '2026-02-13 12:35:20.921+03',
    description: 'Дата создания пользователя',
  })
  readonly registeredAt: Date;
}

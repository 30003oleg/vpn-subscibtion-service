import { ApiProperty } from '@nestjs/swagger';

export class CreateInvoiceDto {
  @ApiProperty({ example: '123', description: 'Индетификатор пользователя TG' })
  readonly tg_id: number;
  @ApiProperty({ example: 'someUser', description: 'Username пользователя TG' })
  readonly username: string | undefined;
  @ApiProperty({ example: 'Ivan', description: 'Имя пользователя TG' })
  readonly first_Name: string | undefined;
  @ApiProperty({ example: 'Ivanov', description: 'Фамилия пользователя TG' })
  readonly last_Name: string | undefined;
  @ApiProperty({
    example: '2026-02-13 12:35:20.921+03',
    description: 'Дата создания пользователя',
  })
  readonly registeredAt: Date;
}

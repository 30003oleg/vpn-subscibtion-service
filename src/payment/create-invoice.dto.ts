import { ApiProperty } from '@nestjs/swagger';

export class CreateInvoiceDto {
  @ApiProperty({ example: '123', description: 'Индетификатор пользователя TG' })
  readonly tg_id: number;
}

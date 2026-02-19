import { ApiProperty } from '@nestjs/swagger';

export class UpdateInvoiceDto {
  @ApiProperty({ example: '123', description: 'Индетификатор пользователя TG' })
  readonly tg_id: number;
  @ApiProperty({ example: 12356, description: 'Индетификатор платежа' })
  invoice_id: number; // TODO: разделить таблицы для разных методов оплаты
}

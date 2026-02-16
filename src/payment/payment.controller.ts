import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service.js';
import { CreateInvoiceDto } from './create-invoice.dto.js';

@ApiTags('Оплата')
@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Post()
  createInvoice(@Body() dto: CreateInvoiceDto) {
    return this.paymentService.createInvoice(dto);
  }
}

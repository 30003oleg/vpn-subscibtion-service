import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service.js';
import { CreateInvoiceDto } from './create-invoice.dto.js';
import { UpdateInvoiceDto } from './update-invoice.dto.js';

@ApiTags('Оплата')
@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Post()
  createInvoice(@Body() dto: CreateInvoiceDto) {
    return this.paymentService.createInvoice(dto);
  }

  @Get('/getMe')
  getMe() {
    return this.paymentService.getMe();
  }

  @Post('/updateInvoice')
  updateInvoice(@Body() dto: UpdateInvoiceDto) {
    return this.paymentService.updateInvoice(dto);
  }
}

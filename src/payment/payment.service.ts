import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './create-invoice.dto.js';
import { getMe } from './crypto-bot.api.js';

@Injectable()
export class PaymentService {
  constructor() {}

  async createInvoice(dto: CreateInvoiceDto) {
    await getMe();
  }
}

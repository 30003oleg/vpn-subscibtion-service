import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvoiceDto } from './create-invoice.dto.js';
import { createInvoice, getInvoices, getMe } from './crypto-bot.api.js';
import {
  CreateInvoiceBody,
  GetInvoicesBody,
  InvoiceInterface,
} from './crypto-bot.types.js';
import { InjectModel } from '@nestjs/sequelize';
import { Invoice } from './invoice.model.js';
import { UpdateInvoiceDto } from './update-invoice.dto.js';
import { User } from '../users/users.model.js';

const defaultInvoiceBody: CreateInvoiceBody = {
  currency_type: 'crypto',
  asset: 'USDT',
  amount: '2.0',
  description: 'Покупка стандартной подписки на 1 месяц',
  // paid_btn_name: '',
  // paid_btn_url?: string; ДОБАВИТЬ ЗАПРОС НА ПОДТВЕРЖДЕНИЕ ПЛАТЕЖА
  allow_anonymous: false,
  expires_in: 3600,
};

const defaultGetInvoicesBody: GetInvoicesBody = {
  asset: 'USDT',
  offset: 0,
  count: 10,
};

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Invoice) private invoiceRepository: typeof Invoice,
    @InjectModel(User) private userRepository: typeof User,
  ) {}

  async createInvoice(userDto: CreateInvoiceDto) {
    const { result: invoice } = await createInvoice({
      ...defaultInvoiceBody,
      payload: `${userDto.tg_id}`,
    });
    if (!invoice) {
      throw new Error('No Invoice');
    }
    const InvoiceData = {
      tg_id: userDto.tg_id,
      paymentMethod: 'CryptoBot',
      ...invoice,
    };

    const user = await this.userRepository.findOne({
      where: { tg_id: userDto.tg_id },
    });
    if (!user) {
      throw new Error('User not found');
    }

    await this.invoiceRepository.create({
      userId: user.id,
      paymentMethod: 'CryptoBot',
      ...invoice,
      /*
      invoice_id: invoice.invoice_id,
      hash: invoice.hash,
      currency_type: invoice.currency_type,
      asset: invoice.asset,
      amount: invoice.amount,
      bot_invoice_url: invoice.bot_invoice_url,
      status: invoice.status,
      created_at: invoice.created_at,
      expiration_date: invoice.expiration_date,
      */
    });
    return InvoiceData;
  }

  async getMe() {
    await getMe();
  }

  async updateInvoice(dto: UpdateInvoiceDto) {
    const { result: items } = await getInvoices({
      ...defaultGetInvoicesBody,
      invoice_ids: `${dto.invoice_id}`,
    });
    if (!items) {
      throw new Error('No Invoice');
    }
    const { items: invoices } = items;
    await this.updateInvoiceRow(invoices[0]);
    return invoices;
  }

  updateInvoiceRow = async (invoice: InvoiceInterface) => {
    const invoiceRow = await this.invoiceRepository.findOne({
      where: { invoice_id: invoice.invoice_id },
    });
    if (!invoiceRow) {
      throw new NotFoundException('Invoice not found');
    }
    invoiceRow.set({
      ...invoice,
      id: invoiceRow.id,
      fee_amount: String(invoice.fee_amount),
    });

    return invoiceRow.save();
  };
}

import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import * as cryptoBotTypes from './crypto-bot.types.js';
import { User } from '../users/users.model.js';

interface PaymentCreationAttributes {
  userId: number;
  paymentMethod: cryptoBotTypes.PaymentMethod;
  invoice_id: number;
  hash: string;
  currency_type?: cryptoBotTypes.CurrencyType;
  asset?: cryptoBotTypes.TestCryptoAsset;
  amount: string;
  bot_invoice_url: string;
  status: cryptoBotTypes.InvoiceStatus;
  created_at: string;
  expiration_date?: string;
}

@Table({ tableName: 'payments' })
export class Payment extends Model<Payment, PaymentCreationAttributes> {
  @ApiProperty({ example: 1, description: 'Уникальный индетификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;
  @ApiProperty({ example: 123, description: 'Индетификатор пользователя TG' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;
  @ApiProperty({ example: 'CryptoBot', description: 'Метод оплаты' })
  @Column({ type: DataType.STRING, allowNull: false })
  paymentMethod: cryptoBotTypes.PaymentMethod;
  @ApiProperty({ example: 12356, description: 'Индетификатор платежа' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  invoice_id: number; // TODO: разделить таблицы для разных методов оплаты
  @ApiProperty({ example: 'asidjfhnaeiuf', description: 'Hash платежа' })
  @Column({ type: DataType.STRING, allowNull: false })
  hash: string;
  @ApiProperty({ example: 'crypto', description: 'Тип валюты' })
  @Column({ type: DataType.STRING, allowNull: true })
  currency_type: cryptoBotTypes.CurrencyType | undefined;
  @ApiProperty({
    example: 'USDT',
    description: 'Криптовалюта в которой считается оплата',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  asset: cryptoBotTypes.TestCryptoAsset | undefined;
  @ApiProperty({ example: '2', description: 'Сумма оплаты' })
  @Column({ type: DataType.STRING, allowNull: false })
  amount: string;
  @ApiProperty({
    example: 'https://t.me/CryptoTestnetBot?start=IVYqUsCa1IGQ',
    description: 'Ссылка на оплату',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  bot_invoice_url: string;
  @ApiProperty({ example: 'active', description: 'Статус платежа' })
  @Column({ type: DataType.STRING, allowNull: false })
  status: cryptoBotTypes.InvoiceStatus;
  @ApiProperty({
    example: '2026-02-18T12:38:08.759Z',
    description: 'Дата создания платежа',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  created_at: string;
  @ApiProperty({
    example: '2026-02-18T13:38:08.755Z',
    description: 'Дата до которой платеж активен',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  expiration_date: string | undefined;
}

/*
{
  ok: true,
  result: {
    invoice_id: 828678,
    hash: 'IVYqUsCa1IGQ',
    currency_type: 'crypto',
    asset: 'USDT',
    amount: '2',
    pay_url: 'https://t.me/CryptoTestnetBot?start=IVYqUsCa1IGQ',
    bot_invoice_url: 'https://t.me/CryptoTestnetBot?start=IVYqUsCa1IGQ',
    mini_app_invoice_url: 'https://t.me/CryptoTestnetBot/app?startapp=invoice-IVYqUsCa1IGQ&mode=compact',
    web_app_invoice_url: 'https://testnet-app.send.tg/invoices/IVYqUsCa1IGQ',
    description: 'Покупка стандартной подписки на 1 месяц',
    status: 'active',
    created_at: '2026-02-18T12:38:08.759Z',
    allow_comments: true,
    allow_anonymous: false,
    expiration_date: '2026-02-18T13:38:08.755Z',
    payload: '424242444'
  }
}
*/

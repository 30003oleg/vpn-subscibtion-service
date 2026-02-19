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

interface InvoiceCreationAttributes {
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

@Table({ tableName: 'invoices' })
export class Invoice extends Model<Invoice, InvoiceCreationAttributes> {
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
  @ApiProperty({ example: 'USDT', description: 'Валюта оплаты' })
  @Column({ type: DataType.STRING, allowNull: true })
  paid_asset: string | undefined;
  @ApiProperty({ example: '2', description: 'Уплаченная сумма' })
  @Column({ type: DataType.STRING, allowNull: true })
  paid_amount: string | undefined;
  @ApiProperty({ example: 'USDT', description: 'Валюта комиссии' })
  @Column({ type: DataType.STRING, allowNull: true })
  fee_asset: string | undefined;
  @ApiProperty({ example: '0.06', description: 'Сумма комиссии' })
  @Column({ type: DataType.STRING, allowNull: true })
  fee_amount: string | undefined;
  @ApiProperty({
    example: '2026-02-18T15:17:22.514Z',
    description: 'Дата оплаты',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  paid_at: string | undefined;
}

/* ДО ОПЛАТЫ
"items": [
        {
            "invoice_id": 828733,
            "hash": "IVHuvcfIGkOl",
            "currency_type": "crypto",
            "asset": "USDT",
            "amount": "2",
            "pay_url": "https://t.me/CryptoTestnetBot?start=IVHuvcfIGkOl",
            "bot_invoice_url": "https://t.me/CryptoTestnetBot?start=IVHuvcfIGkOl",
            "mini_app_invoice_url": "https://t.me/CryptoTestnetBot/app?startapp=invoice-IVHuvcfIGkOl&mode=compact",
            "web_app_invoice_url": "https://testnet-app.send.tg/invoices/IVHuvcfIGkOl",
            "description": "Покупка стандартной подписки на 1 месяц",
            "status": "active",
            "created_at": "2026-02-18T15:12:54.682Z",
            "allow_comments": true,
            "allow_anonymous": false,
            "expiration_date": "2026-02-18T16:12:54.679Z",
            "payload": "332636792"
        }
    ]

    ПОСЛЕ ОПЛАТЫ
    "items": [
        {
            "invoice_id": 828733,
            "hash": "IVHuvcfIGkOl",
            "currency_type": "crypto",
            "asset": "USDT",
            "amount": "2",
            "paid_asset": "USDT",
            "paid_amount": "2",
            "fee_asset": "USDT",
            "fee_amount": "0.06",
            "fee_in_usd": "0.0599771",
            "pay_url": "https://t.me/CryptoTestnetBot?start=IVHuvcfIGkOl",
            "bot_invoice_url": "https://t.me/CryptoTestnetBot?start=IVHuvcfIGkOl",
            "mini_app_invoice_url": "https://t.me/CryptoTestnetBot/app?startapp=invoice-IVHuvcfIGkOl&mode=compact",
            "web_app_invoice_url": "https://testnet-app.send.tg/invoices/IVHuvcfIGkOl",
            "description": "Покупка стандартной подписки на 1 месяц",
            "status": "paid",
            "created_at": "2026-02-18T15:12:54.682Z",
            "allow_comments": true,
            "allow_anonymous": false,
            "expiration_date": "2026-02-18T16:12:54.679Z",
            "paid_usd_rate": "0.99961845",
            "paid_at": "2026-02-18T15:17:22.514Z",
            "paid_anonymously": false,
            "payload": "332636792"
        }
    ]
*/

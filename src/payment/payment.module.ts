import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller.js';
import { PaymentService } from './payment.service.js';
import { SequelizeModule } from '@nestjs/sequelize';
import { Invoice } from './invoice.model.js';
import { User } from '../users/users.model.js';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService],
  imports: [SequelizeModule.forFeature([Invoice, User])],
})
export class PaymentModule {}

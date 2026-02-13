import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller('/api')
export class AppController {
  constructor(private appService: AppService) {}

  @Get('/users123')
  getUsers() {
    return this.appService.getUsers();
  }
}

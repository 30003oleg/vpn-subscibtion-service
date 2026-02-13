import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUsers() {
    return [{ id: 1, name: 'USER1' }]; // Вся логика тут. Запросы к бд, валидация данных
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUser(): object {
    return {
      user: 'Amartya',
      email: 'amartya@gmail.com',
    };
  }
}

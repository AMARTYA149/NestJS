import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { AppService } from 'src/app.service';

@Module({
  controllers: [UserController],
  providers: []
})
export class UserModule {}

import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Delete,
  Patch,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('/user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(): object {
    return this.appService.getUser();
  }



  @Post()
  postUserDetails(@Req() req: Request): object {
    return req.body;
  }

  @Get('/:userId')
  getUserIdDetails(@Param() params: { userId: number }) {
    return params;
  }

  @Patch('/:userId')
  updateUser(@Req() req: Request){
    return req.body;
  }

   @Delete('/:userId')
  deleteUserIdDetails(@Param() params: { userId: number }) {
    return params;
  }
}

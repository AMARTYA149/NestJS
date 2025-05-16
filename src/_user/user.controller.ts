import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Delete,
  Patch,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('/user')
export class UserController {


  @Get()
  getUser(): object {
    return {
        name: "Amartya", 
        email: "amartya@gmail.com"
    };
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
  updateUser(@Req() req: Request) {
    return req.body;
  }

  @Delete('/:userId')
  deleteUserIdDetails(@Param() params: { userId: number }) {
    return params;
  }
}

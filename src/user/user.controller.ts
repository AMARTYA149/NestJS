import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { UpdateUserDTO } from './dto/update-user.dto';
import { CreateUserDTO } from './dto/create-user.dto copy';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(): object {
    return this.userService.get();
  }

  @Post()
  store(@Body() body: CreateUserDTO) {
    return this.userService.create(body);
  }

  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.show(userId);
  }

  @Patch('/:userId')
  update(
    @Body()
    body: UpdateUserDTO,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(body, userId);
  }

  @Delete('/:userId')
  deleteUserIdDetails(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.deleteUserId(userId);
  }
}

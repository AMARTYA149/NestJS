import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
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
    return this.userService.createUser(body);
  }

  @Get('/:userId')
  getUserIdDetails(@Param() param: { userId: number }) {
    return this.userService.getOneUser(param);
  }

  @Patch('/:userId')
  update(
    @Body()
    body: UpdateUserDTO,
    @Param() param: { userId: number },
  ) {
    return this.userService.update(body, param);
  }

  @Delete('/:userId')
  deleteUserIdDetails(@Param() param: { userId: number }) {
    return this.userService.deleteUserId(param);
  }
}

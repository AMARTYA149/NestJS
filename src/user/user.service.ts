import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDTO } from './dto/update-user.dto';
import { CreateUserDTO } from './dto/create-user.dto copy';

@Injectable()
export class UserService {
  get() {
    return {
      name: 'Amartya A',
      email: 'amartya@gmail.com',
    };
  }

  create(createUserDto: CreateUserDTO) {
    return createUserDto;
  }

  update(updateUserDTO: UpdateUserDTO, userId: number) {
    return {
      body: updateUserDTO,
      userId,
    };
  }

  getOneUser(param: number) {
    return {
      userid: param,
    };
  }

  deleteUserId(userId: number) {
    return { userId };
  }
}

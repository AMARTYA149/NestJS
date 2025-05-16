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

  update(updateUserDTO: UpdateUserDTO, param: { userId: number }) {
    return {
      body: updateUserDTO,
      param,
    };
  }

  getOneUser(param: { userId: number }) {
    return {
      param: param.userId,
    };
  }

  deleteUserId(param: { userId: number }) {
    return { param: param.userId };
  }
}

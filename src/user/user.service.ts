import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDTO } from './dto/update-user.dto';
import { CreateUserDTO } from './dto/create-user.dto copy';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  get(): Promise<User[]> {
    return this.usersRepository.find();
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

  show(param: number) {
    return {
      userid: param,
    };
  }

  deleteUserId(userId: number) {
    return { userId };
  }
}

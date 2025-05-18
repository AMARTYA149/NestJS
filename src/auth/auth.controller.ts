import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('/login')
  async login(@Body() loginDTO: LoginDTO) {
    const user = await this.userService.findByEmail(loginDTO.email);
    try {
      if (user && user.password === loginDTO.password) {
        return user;
      } else {
        throw new Error('Invalid credentials!');
      }
    } catch (error) {
      return {
        error: {
          message: 'Invalid credentials',
        },
      };
    }
  }
}

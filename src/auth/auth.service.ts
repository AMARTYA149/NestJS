import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    try {
      if (user && user.password === password) {
        return user;
      } else {
        return null;
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

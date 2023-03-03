import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getUser() {
    const user = await this.userService.user({
      email: 'test@test.com',
    });
    return user;
  }
}

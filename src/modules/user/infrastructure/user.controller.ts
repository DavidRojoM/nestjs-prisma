import { Controller, Get } from '@nestjs/common';
import { UserRepository } from '../domain/repositories/users.repository';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserRepository) {}
  @Get()
  async getUser() {
    return this.userService.findAll();
  }
}

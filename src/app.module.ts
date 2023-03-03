import { Module } from '@nestjs/common';
import { UserController } from './modules/user/user.controller';
import { PrismaService } from './config/prisma/prisma.service';
import { UserService } from './modules/user/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [PrismaService, UserService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/user.controller';
import { UserRepository } from './domain/repositories/users.repository';
import { PrismaUserRepository } from './infrastructure/repositories/prisma-user.repository';
import { KyselyUserRepository } from './infrastructure/repositories/kysely-user.repository';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: UserRepository,
      useClass: KyselyUserRepository,
    },
  ],
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { DatabaseModule } from './db/database.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './config/prisma/prisma.module';

@Module({
  imports: [DatabaseModule, PrismaModule, UserModule],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../config/prisma/prisma.service';
import { UserRepository } from '../../domain/repositories/users.repository';
import { User } from '../../domain/model/user';

@Injectable()
export class PrismaUserRepository extends UserRepository {
  constructor(private prisma: PrismaService) {
    super();
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      include: {
        userDetails: true,
      },
    });

    return users.map((user) => ({
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      birthdate: user.userDetails.birthdate,
      city: user.userDetails.city,
      gender: user.userDetails.gender,
      name: user.userDetails.name,
      phone: user.userDetails.phone,
      surname: user.userDetails.surname,
    }));
  }
}

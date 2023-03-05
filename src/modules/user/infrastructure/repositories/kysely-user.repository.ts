import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/users.repository';
import { User } from '../../domain/model/user';
import { KyselyDatabaseConnection } from 'src/db/kysely-database.connection';

@Injectable()
export class KyselyUserRepository extends UserRepository {
  constructor(private readonly dbConn: KyselyDatabaseConnection) {
    super();
  }

  async findAll(): Promise<User[]> {
    const users = await this.dbConn
      .selectFrom('User')
      .innerJoin('UserDetail', 'User.id', 'UserDetail.userId')
      .selectAll(['User', 'UserDetail'])
      .execute();

    return users.map((user) => ({
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      birthdate: user.birthdate,
      city: user.city,
      gender: user.gender,
      name: user.name,
      phone: user.phone,
      surname: user.surname,
    }));
  }
}

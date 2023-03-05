import { Global, Module } from '@nestjs/common';
import { Kysely, MysqlDialect } from 'kysely';
import { KyselyDatabaseConnection } from './kysely-database.connection';
import { createPool } from 'mysql2';

@Global()
@Module({
  providers: [
    {
      provide: KyselyDatabaseConnection,
      useFactory: async () => {
        return new Kysely({
          dialect: new MysqlDialect({
            pool: createPool({
              host: '127.0.0.1',
              port: 3366,
              user: 'root',
              password: 'toor',
              database: 'prisma',
            }),
          }),
          log: ['error', 'query'],
        });
      },
    },
  ],
  exports: [KyselyDatabaseConnection],
})
export class DatabaseModule {}

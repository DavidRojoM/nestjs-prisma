import { Kysely } from 'kysely';
import { DB } from './types';

export class KyselyDatabaseConnection extends Kysely<DB> {}

import { User } from '../model/user';

export abstract class UserRepository {
  abstract findAll(): Promise<User[]>;
}

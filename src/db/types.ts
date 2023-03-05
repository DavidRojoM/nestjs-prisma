import type { ColumnType } from 'kysely';
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;
export type Gender = 'm' | 'f';
export type Currency = 'EUR' | 'USD' | 'CAD';
export type Hospital = {
  id: Generated<number>;
  extId: string;
  name: string;
  address: string | null;
};
export type Social = {
  userId: number;
  twitter: string | null;
  facebook: string | null;
  instagram: string | null;
  createdAt: Generated<Timestamp>;
  updatedAt: Generated<Timestamp>;
};
export type Transaction = {
  id: Generated<number>;
  amount: number;
  createdAt: Generated<Timestamp>;
  currency: Generated<Currency>;
  updatedAt: Generated<Timestamp>;
  userId: number;
};
export type User = {
  id: Generated<number>;
  nickname: string;
  email: string;
  password: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Generated<Timestamp>;
};
export type UserDetail = {
  userId: number;
  name: string | null;
  surname: string | null;
  city: string | null;
  phone: string | null;
  gender: Gender | null;
  birthdate: Timestamp | null;
  createdAt: Generated<Timestamp>;
  updatedAt: Generated<Timestamp>;
};
export type UserHospital = {
  userId: number;
  hospitalId: number;
};
export type DB = {
  Hospital: Hospital;
  Social: Social;
  Transaction: Transaction;
  User: User;
  UserDetail: UserDetail;
  UserHospital: UserHospital;
};

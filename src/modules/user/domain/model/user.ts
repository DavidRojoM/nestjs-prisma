export interface User {
  id: number;
  nickname: string;
  email: string;
  name?: string | undefined;
  surname?: string | undefined;
  city?: string | undefined;
  phone?: string | undefined;
  gender?: 'm' | 'f' | undefined;
  birthdate?: Date | undefined;
}

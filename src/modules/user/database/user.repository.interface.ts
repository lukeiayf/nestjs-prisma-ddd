import { User } from '../domain/entities/user.entity';

export const USER_REPOSITORY_TOKEN = Symbol('USER_REPOSITORY');

export interface IUserRepository {
  existsEmail(email: string): Promise<boolean>;
  save(user: User): Promise<void>;
}
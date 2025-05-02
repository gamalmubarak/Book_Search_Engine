import type { Book } from './Book';

export interface User {
  username: string | null;
  email: string | null;
  
  savedBooks: Book[];
}

export interface NewUser {
  username: string;
  email: string;
  password: string;
}
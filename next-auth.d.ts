import { ISessionUser } from '@/interfaces/user.interface';
import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
	interface Session {
		user: ISessionUser;
	}
}

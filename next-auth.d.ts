import 'next-auth';

import { ISessionUser } from '@/interfaces/user.interface';

declare module 'next-auth' {
	interface Session {
		user: ISessionUser;
	}
}

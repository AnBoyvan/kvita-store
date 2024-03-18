import { authService } from '@/services/auth.service';
import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { authCallbacks } from './auth-callbacks';
import Credentials from 'next-auth/providers/credentials';
import { IAuthResponse } from '@/interfaces/auth.interface';
import { IUser } from '@/interfaces/user.interface';
import { errorCatch } from '@/utils/helpers/error';
import { AxiosError } from 'axios';

export const authConfig: AuthOptions = {
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
		}),
		Credentials({
			credentials: {
				login: { label: 'login', type: 'text', required: true },
				password: { label: 'password', type: 'password', required: true },
			},
			async authorize(credentials): Promise<any> {
				if (!credentials?.login || !credentials.password) return null;
				const { login, password } = credentials;
				try {
					const { user, ...rest } = await authService.login({ login, password });
					return { ...user, ...rest };
				} catch (error: any) {
					throw new Error(error.response?.data?.message);
				}
			},
		}),
	],
	callbacks: authCallbacks,
	pages: { signIn: '/signin' },
};

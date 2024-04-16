import type { CallbacksOptions } from 'next-auth';

import { authService } from '@/services/kvita-api';

export const authCallbacks: Partial<CallbacksOptions> = {
	async signIn({ account, profile }) {
		if (account?.provider === 'google' && profile?.email) {
			try {
				const existedUser = await authService.exist(profile.email);
				if (!existedUser) {
					const newUser = {
						name: profile.name || 'User',
						email: profile.email,
						password: profile.email,
					};
					await authService.register(newUser);
				}
				return true;
			} catch (error) {
				return false;
			}
		}
		return true;
	},
	async jwt({ token, user, account }) {
		if (account?.provider === 'credentials') {
			return { ...user };
		}

		if (!token.email) {
			return token;
		}

		const data = await authService.signIn(token.email);
		if (!data) return token;
		const { user: userData, ...rest } = data;
		return {
			...userData,
			...rest,
		};
	},
	async session({ session, token }) {
		return {
			...session,
			user: {
				...token,
			},
		};
	},
};

import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

import { Role } from './interfaces/user.interface';

export default withAuth(
	function middleware(request: NextRequestWithAuth) {
		const allowedRoles = [Role.Manager, Role.Admin, Role.Superuser];
		const userRole = request.nextauth.token?.role;

		if (request.nextUrl.pathname.startsWith('/signin') && request.nextauth.token) {
			return NextResponse.redirect(new URL('/', request.url));
		}

		if (
			request.nextUrl.pathname.startsWith('/dashboard') &&
			!allowedRoles.includes(userRole as Role)
		) {
			return NextResponse.rewrite(new URL('/not-found', request.url));
		}

		if (!request.nextauth.token) return NextResponse.rewrite(new URL('/not-found', request.url));
	},
	{
		callbacks: {
			authorized: ({ token }) => !!token,
		},
		pages: {
			signIn: '/signin',
			signOut: '/',
		},
	},
);

export const config = { matcher: ['/signin', '/cabinet/:path*', '/dashboard/:path*'] };

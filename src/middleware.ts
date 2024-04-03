import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

import { Role } from './interfaces/user.interface';

export default withAuth(
	function middleware(request: NextRequestWithAuth) {
		const allowedRoles = [Role.Manager, Role.Admin, Role.Superuser];
		const accessToken = request.nextauth.token?.accessToken as string;

		if (
			request.nextUrl.pathname.startsWith('/dashboard') &&
			!allowedRoles.includes(accessToken as Role)
		) {
			return NextResponse.rewrite(new URL('/not-found', request.url));
		}

		if (!request.nextauth.token) return NextResponse.rewrite(new URL('/not-found', request.url));

		if (request.nextUrl.pathname.startsWith('/signin') && request.nextauth.token) {
			return NextResponse.redirect(new URL('/', request.url));
		}
	},
	{
		callbacks: {
			authorized: ({ token }) => !!token,
		},
	},
);

export const config = { matcher: ['/cabinet/:path*', '/dashboard/:path*', '/signin'] };

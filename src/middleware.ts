import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';
import { Role } from './interfaces/user.interface';
import { NextResponse } from 'next/server';

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
	},
	{
		callbacks: {
			authorized: ({ token }) => !!token,
		},
	},
);

export const config = { matcher: ['/cabinet/:path*', '/dashboard/:path*'] };

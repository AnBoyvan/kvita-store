import { PAGES } from '@/config/pages-url.config';
import { Tokens } from '@/services/auth-token.service';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request;

	// const refreshToken = cookies.get(Tokens.REFRESH_TOKEN)?.value;

	// console.log(cookies);

	// const isCabinetPage = url.includes('/cabinet');
	// const isDashboardPage = url.includes('/dashboard');

	// if (isCabinetPage && !refreshToken) {
	// 	return NextResponse.redirect(new URL(PAGES.HOME, url));
	// }

	return NextResponse.next();
}

export const config = {
	matcher: [`/:path*`, `/dashboard/:path*`],
};

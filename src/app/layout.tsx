import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { Marck_Script, Montserrat, Open_Sans } from 'next/font/google';
import { Suspense } from 'react';
import { Toaster } from 'sonner';

import { Providers } from './providers';

import { CurrentUser } from '@/components/Features';
import { Footer, Header } from '@/components/Layout';
import { SITE_NAME } from '@/constants';

const openSans = Open_Sans({
	subsets: ['latin', 'cyrillic'],
	weight: ['300', '400', '600', '700'],
	display: 'swap',
	variable: '--font-open-sans',
});

const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	weight: ['300', '400', '600', '700'],
	display: 'swap',
	variable: '--font-montserrat',
});

const markScript = Marck_Script({
	subsets: ['cyrillic', 'latin'],
	weight: ['400'],
	display: 'swap',
	variable: '--font-mark-script',
});

export const metadata: Metadata = {
	icons: {
		icon: './favicon.ico',
	},
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Кондитерська студія "КВіТа"',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="uk"
			className={`${openSans.variable} ${montserrat.variable} ${markScript.variable}`}
			suppressHydrationWarning
		>
			<body>
				<Suspense>
					<Providers>
						<Header />
						{children}
						<Footer />
						<Toaster
							position="top-right"
							expand={true}
							richColors
							closeButton
							duration={1500}
							visibleToasts={3}
						/>
						<CurrentUser />
					</Providers>
				</Suspense>
			</body>
		</html>
	);
}

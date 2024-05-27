import '@/styles/globals.scss';
import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Marck_Script, Montserrat, Open_Sans } from 'next/font/google';
import { Suspense } from 'react';
import { Toaster } from 'sonner';

import { Providers } from './providers';
import { Scripts } from './scripts';

import { CurrentUser } from '@/components/Features';
import { Footer, Header } from '@/components/Layout';
import { Spinner } from '@/components/Shared';
import { KEYWORDS, ORGANIZATION, SITE_DESCRIPTION, SITE_NAME } from '@/constants';

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
	metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || ''),
	title: {
		default: ORGANIZATION,
		template: `%s | ${ORGANIZATION}`,
	},
	description: SITE_DESCRIPTION,
	twitter: {
		card: 'summary_large_image',
	},
	keywords: KEYWORDS,
	openGraph: {
		title: {
			default: ORGANIZATION,
			template: `%s | ${ORGANIZATION}`,
		},
		description: SITE_DESCRIPTION,
		type: 'website',
		url: process.env.NEXT_PUBLIC_BASE_URL,
		siteName: SITE_NAME,
	},
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
			<GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`} />
			<body>
				<Suspense fallback={<Spinner />}>
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
				<Scripts />
			</body>
		</html>
	);
}

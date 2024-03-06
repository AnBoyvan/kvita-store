import { SITE_NAME } from '@/constants/seo.constants';
import type { Metadata } from 'next';
import { Marck_Script, Montserrat, Open_Sans } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.scss';
import { Providers } from './providers';
import { Header } from '@/modules/Layout/Header/Header';
import { Modal } from '@/components/Modal/Modal';
import { useModal } from '@/hooks/useModal';

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
				<Providers>
					<Modal />
					<Header />
					{children}
					<Toaster
						position="top-right"
						richColors
						closeButton
						duration={1500}
					/>
				</Providers>
			</body>
		</html>
	);
}

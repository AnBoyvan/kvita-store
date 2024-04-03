'use client';

import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

import { ModalProvider, NextAuthProvider, QueryProvider } from '@/providers';

export function Providers({ children }: PropsWithChildren) {
	return (
		<NextAuthProvider>
			<QueryProvider>
				<ThemeProvider attribute="class" storageKey="theme" disableTransitionOnChange>
					<ModalProvider>{children}</ModalProvider>
				</ThemeProvider>
			</QueryProvider>
		</NextAuthProvider>
	);
}

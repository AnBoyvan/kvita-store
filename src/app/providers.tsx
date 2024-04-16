'use client';

import { ThemeProvider } from 'next-themes';
import type { PropsWithChildren } from 'react';

import { NextAuthProvider, QueryProvider } from '@/providers';

export function Providers({ children }: PropsWithChildren) {
	return (
		<NextAuthProvider>
			<QueryProvider>
				<ThemeProvider attribute="class" storageKey="theme" disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</QueryProvider>
		</NextAuthProvider>
	);
}

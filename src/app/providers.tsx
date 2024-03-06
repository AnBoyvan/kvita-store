'use client';

import { ModalProvider } from '@/providers/ModalProvider';
import { QueryProvider } from '@/providers/QueryClientProvider';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
	return (
		<QueryProvider>
			<ThemeProvider
				attribute="class"
				storageKey="theme"
				disableTransitionOnChange
			>
				<ModalProvider>{children}</ModalProvider>
			</ThemeProvider>
		</QueryProvider>
	);
}

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, type PropsWithChildren } from 'react';

export const QueryProvider = ({ children }: PropsWithChildren) => {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
					staleTime: 1000 * 60,
				},
			},
		}),
	);

	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

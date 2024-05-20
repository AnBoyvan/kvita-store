import { Suspense } from 'react';

import { Container, Sidebar } from '@/components/Layout';
import { Spinner } from '@/components/Shared';

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="relative w-full flex flex-row  mx-auto">
			<Suspense fallback={<Spinner />}>
				<Sidebar />
				<div className="max-w-[1600px] pl-12 w-full  mx-auto">
					<Container>{children}</Container>
				</div>
			</Suspense>
		</div>
	);
}

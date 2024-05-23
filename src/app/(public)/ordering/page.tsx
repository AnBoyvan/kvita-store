import { Suspense } from 'react';

import { Spinner } from '@/components/Shared';

export default function OrderingPage() {
	return (
		<Suspense fallback={<Spinner />}>
			<h1>Ordering</h1>
		</Suspense>
	);
}

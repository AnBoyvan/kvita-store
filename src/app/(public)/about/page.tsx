import { Suspense } from 'react';

import { Spinner } from '@/components/Shared';

export default function AboutPage() {
	return (
		<Suspense fallback={<Spinner />}>
			<h1>About</h1>;
		</Suspense>
	);
}

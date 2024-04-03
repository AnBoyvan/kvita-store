import { Suspense } from 'react';

import { Auth, AuthSkeleton } from '@/components';

export default function SigningPage() {
	return (
		<Suspense fallback={<AuthSkeleton />}>
			<div className="flex justify-center">
				<Auth />
			</div>
		</Suspense>
	);
}

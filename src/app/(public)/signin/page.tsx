import { AuthSkeleton } from '@/components/Skeletons';
import { Auth } from '@/modules/Auth/Auth';
import { Suspense } from 'react';

export default function SigningPage() {
	return (
		<Suspense fallback={<AuthSkeleton />}>
			<div className="flex justify-center">
				<Auth />
			</div>
		</Suspense>
	);
}

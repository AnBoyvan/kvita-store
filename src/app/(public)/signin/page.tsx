import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

import { Auth } from '@/components/Features';
import { Spinner } from '@/components/Shared';

export default async function SigningPage() {
	const session = await getServerSession();

	if (session) redirect('/');

	return (
		<Suspense fallback={<Spinner />}>
			<div className="flex justify-center">
				<Auth />
			</div>
		</Suspense>
	);
}

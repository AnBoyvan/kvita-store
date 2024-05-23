import { Suspense } from 'react';

import { UserInfo } from './_components';

import { Htag, Spinner } from '@/components/Shared';

export default function InfoPage() {
	return (
		<Suspense fallback={<Spinner />}>
			<Htag tag="h1">Особиста інформація</Htag>
			<UserInfo />
		</Suspense>
	);
}

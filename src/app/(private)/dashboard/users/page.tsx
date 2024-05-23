import { Suspense } from 'react';

import { UsersTable } from './_components';

import { Htag, Spinner } from '@/components/Shared';

export default function UsersDashboardPage() {
	return (
		<Suspense fallback={<Spinner />}>
			<Htag tag="h1">Користувачі</Htag>
			<UsersTable />
		</Suspense>
	);
}

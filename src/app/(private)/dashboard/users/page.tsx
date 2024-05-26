import { Metadata } from 'next';

import { UsersTable } from './_components';

import { Htag } from '@/components/Shared';

export const metadata: Metadata = {
	title: 'Користувачі',
	robots: { index: false, follow: false },
};

export default function UsersDashboardPage() {
	return (
		<>
			<Htag tag="h1">Користувачі</Htag>
			<UsersTable />
		</>
	);
}

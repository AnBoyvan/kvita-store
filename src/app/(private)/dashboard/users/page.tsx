import { UsersTable } from './_components';

import { Htag } from '@/components/Shared';

export default function UsersDashboardPage() {
	return (
		<>
			<Htag tag="h1">Користувачі</Htag>
			<UsersTable />
		</>
	);
}

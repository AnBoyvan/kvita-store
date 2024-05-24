import { UserInfo } from './_components';

import { Htag } from '@/components/Shared';

export default function InfoPage() {
	return (
		<>
			<Htag tag="h1">Особиста інформація</Htag>
			<UserInfo />
		</>
	);
}

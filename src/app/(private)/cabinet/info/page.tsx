import { Metadata } from 'next';

import { UserInfo } from './_components';

import { Htag } from '@/components/Shared';

export const metadata: Metadata = {
	title: 'Особиста інформація',
	robots: { index: false, follow: false },
};

export default function InfoPage() {
	return (
		<>
			<Htag tag="h1">Особиста інформація</Htag>
			<UserInfo />
		</>
	);
}

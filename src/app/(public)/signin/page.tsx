import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { Auth } from '@/components/Features';

export const metadata: Metadata = {
	title: 'Вхід',
	openGraph: {
		title: 'Вхід',
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/signin`,
	},
};

export default async function SigningPage() {
	const session = await getServerSession();

	if (session) redirect('/');

	return (
		<>
			<div className="flex justify-center">
				<Auth />
			</div>
		</>
	);
}

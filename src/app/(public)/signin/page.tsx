import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { Auth } from '@/components/Features';

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

import { Suspense } from 'react';

import { PasswordRequest } from './_components';

import { Htag, Spinner } from '@/components/Shared';

export default function PasswordPage() {
	return (
		<Suspense fallback={<Spinner />}>
			<Htag tag="h1">Зміна пароля</Htag>
			<PasswordRequest />
		</Suspense>
	);
}

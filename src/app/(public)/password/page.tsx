import { Metadata } from 'next';

import { PasswordRequest } from './_components';

import { Htag } from '@/components/Shared';

export const metadata: Metadata = {
	title: 'Зміна пароля',
	openGraph: {
		title: 'Зміна пароля',
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/password`,
	},
};

export default function PasswordPage() {
	return (
		<>
			<Htag tag="h1">Зміна пароля</Htag>
			<PasswordRequest />
		</>
	);
}

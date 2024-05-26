import { Metadata } from 'next';

import { PasswordChangeForm } from './_components';

import { Htag } from '@/components/Shared';

export const metadata: Metadata = {
	title: 'Зміна пароля',
	openGraph: {
		title: 'Зміна пароля',
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/password`,
	},
};

export default function PasswordChange({ params }: { params: { token: string } }) {
	return (
		<div>
			<Htag tag="h1">Зміна пароля</Htag>
			<PasswordChangeForm token={params.token} />
		</div>
	);
}

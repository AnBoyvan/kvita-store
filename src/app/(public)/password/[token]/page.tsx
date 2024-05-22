import { PasswordChangeForm } from './_components';

import { Htag } from '@/components/Shared';

export default function PasswordChange({ params }: { params: { token: string } }) {
	return (
		<div>
			<Htag tag="h1">Зміна пароля</Htag>
			<PasswordChangeForm token={params.token} />
		</div>
	);
}

import { PasswordRequest } from './_components';

import { Htag } from '@/components/Shared';

export default function PasswordPage() {
	return (
		<div>
			<Htag tag="h1">Зміна пароля</Htag>
			<PasswordRequest />
		</div>
	);
}

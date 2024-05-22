import { yupResolver } from '@hookform/resolvers/yup';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';

import styles from './Login.module.scss';

import { Button, Input } from '@/components/UI';
import { useModal } from '@/hooks';
import type { ILoginForm } from '@/interfaces';
import { loginSchema } from '@/utils/validation';

export const Login: React.FC = () => {
	const { closeModal } = useModal();

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm<ILoginForm>({
		mode: 'all',
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(loginSchema),
	});

	const params = useSearchParams();
	const router = useRouter();

	const onSubmit: SubmitHandler<ILoginForm> = async data => {
		const res = await signIn('credentials', { ...data, redirect: false });
		if (res && res.error) toast.error(res.error, { closeButton: false });
		if (res && !res.error) {
			reset();
			const callbackUrl = params.get('callbackUrl');
			if (callbackUrl) router.push(callbackUrl);
		}
	};

	return (
		<>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Input
					label="Пошта"
					{...register('login')}
					type="text"
					error={errors.login}
					value={watch('login')}
					icon="User"
				/>
				<Input
					label="Пароль"
					{...register('password')}
					type="password"
					error={errors.password}
					value={watch('password')}
					icon="LockKeyhole"
				/>
				<Link href="/password" className={styles.link} onClick={closeModal}>
					Забули пароль?
				</Link>
				<Button mode="wide" variant="primary">
					Увійти
				</Button>
			</form>
		</>
	);
};

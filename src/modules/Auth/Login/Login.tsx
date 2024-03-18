import { Button } from '@/ui/Button/Button';
import { Input } from '@/ui/Input/Input';
import styles from './Login.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoginForm } from '@/interfaces/auth.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/utils/validation/authSchemas';
import Link from 'next/link';
import { useContext } from 'react';
import { ModalContext } from '@/hooks/useModal';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';
import { useRouter, useSearchParams } from 'next/navigation';

export const Login: React.FC = () => {
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

	const { closeModal } = useContext(ModalContext);
	const params = useSearchParams();
	const router = useRouter();

	const onSubmit: SubmitHandler<ILoginForm> = async data => {
		const res = await signIn('credentials', { ...data, redirect: false });
		if (res && res.error) toast.error(res.error, { closeButton: false });
		if (res && !res.error) {
			reset();
			closeModal();
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
				<Link href="/password" className={styles.link}>
					Забули пароль?
				</Link>
				<Button mode="wide" variant="primary">
					Увійти
				</Button>
			</form>
		</>
	);
};

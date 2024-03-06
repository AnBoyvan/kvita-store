import { Button } from '@/ui/Button/Button';
import { Input } from '@/ui/Input/Input';
import styles from './Login.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoginForm } from '@/interfaces/auth.interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/utils/validation/authSchemas';
import Link from 'next/link';
import { useAuth } from '@/store/auth.store';
import { useContext } from 'react';
import { ModalContext } from '@/hooks/useModal';

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
	const { login } = useAuth();

	const onSubmit: SubmitHandler<ILoginForm> = async data => {
		await login(data);
		reset();
		closeModal();
	};

	return (
		<>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Input
					label="Ім’я"
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

import { Button } from '@/ui/Button/Button';
import { Input } from '@/ui/Input/Input';
import styles from './Register.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IRegisterForm } from '@/interfaces/auth.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '@/utils/validation/authSchemas';
import { useContext } from 'react';
import { ModalContext } from '@/hooks/useModal';
import { authService } from '@/services/auth.service';
import { errorCatch } from '@/utils/helpers/error';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

export const Register: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm<IRegisterForm>({
		mode: 'onChange',
		defaultValues: {
			name: '',
			phone: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(registerSchema),
	});

	const { closeModal } = useContext(ModalContext);
	const params = useSearchParams();
	const router = useRouter();

	const onSubmit: SubmitHandler<IRegisterForm> = async ({ confirmPassword, ...data }) => {
		try {
			await authService.register(data);
			const res = await signIn('credentials', {
				login: data.email,
				password: data.password,
				redirect: false,
			});
			if (res && res.error) toast.error(res.error, { closeButton: false });
			if (res && !res.error) {
				reset();
				closeModal();
				const callbackUrl = params.get('callbackUrl');
				if (callbackUrl) router.push(callbackUrl);
			}
		} catch (error) {
			toast.error(errorCatch(error), { closeButton: false });
		}
	};

	return (
		<>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Input
					label="Ім’я"
					{...register('name')}
					type="text"
					error={errors.name}
					value={watch('name')}
					icon="User"
				/>
				<Input
					label="Пошта"
					{...register('email')}
					type="text"
					error={errors.email}
					value={watch('email')}
					icon="Mail"
				/>
				<Input
					label="Телефон"
					{...register('phone')}
					type="text"
					error={errors.phone}
					value={watch('phone')}
					icon="Smartphone"
				/>
				<Input
					label="Пароль"
					{...register('password')}
					type="password"
					error={errors.password}
					value={watch('password')}
					icon="LockKeyhole"
				/>
				<Input
					label="Підтвердіть пароль"
					{...register('confirmPassword')}
					type="password"
					error={errors.confirmPassword}
					value={watch('confirmPassword')}
					icon="LockKeyhole"
				/>
				<Button mode="wide" variant="primary">
					Зареєструватися
				</Button>
			</form>
		</>
	);
};

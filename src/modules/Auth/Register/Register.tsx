import { Button } from '@/ui/Button/Button';
import { Input } from '@/ui/Input/Input';
import styles from './Register.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IRegisterForm } from '@/interfaces/auth.interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '@/utils/validation/authSchemas';

export const Register: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm<IRegisterForm>({
		mode: 'all',
		defaultValues: {
			name: '',
			phone: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(registerSchema),
	});

	// const { register: reg } = useAuth();

	const onSubmit: SubmitHandler<IRegisterForm> = ({ confirmPassword, ...data }) => {
		// reg.mutate(data);
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

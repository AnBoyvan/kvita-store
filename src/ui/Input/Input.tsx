import { InputProps } from './Input.props';
import styles from './Input.module.scss';
import { ForwardedRef, forwardRef, useState } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon/Icon';
import { error } from 'console';
import { boolean } from 'yup';
import { Button } from '../Button/Button';

export const Input = forwardRef(
	(
		{ label, icon, error, type, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>,
	): JSX.Element => {
		const [showPassword, setShowPassword] = useState<boolean>(false);

		const togglePasswordVisibility = () => {
			setShowPassword(!showPassword);
		};

		const isValid = Boolean(props.value && !error);

		return (
			<>
				<div className={styles.wrapper}>
					<label className={styles.label}>{label}</label>
					<div className={styles.inputWrapper}>
						{icon && (
							<Icon
								name={icon}
								size={24}
								className={clsx(
									styles.icon,
									error && styles.error,
									isValid && styles.valid,
								)}
							/>
						)}
						<input
							ref={ref}
							className={clsx(
								styles.input,
								icon && styles.withIcon,
								isValid && styles.valid,
								error && styles.error,
							)}
							type={showPassword ? 'text' : type}
							{...props}
						/>
						{error && (
							<div className={styles.errorMessage}>*{error.message}</div>
						)}
						{type === 'password' && (
							<Button
								type="button"
								mode="link"
								onClick={togglePasswordVisibility}
								className={styles.passwordBtn}
							>
								<Icon size={24} name={showPassword ? 'EyeOff' : 'Eye'} />
							</Button>
						)}
					</div>
				</div>
			</>
		);
	},
);

'use client';

import clsx from 'clsx';
import { forwardRef, useState, type ForwardedRef } from 'react';

import styles from './Input.module.scss';
import type { InputProps } from './Input.props';

import { Icon } from '@/components/Shared';
import { Button } from '@/components/UI';

export const Input = forwardRef(
	(
		{ label, icon, error, type, className, ...props }: InputProps,
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
					<label htmlFor={props.name} className={styles.label}>
						{label}
					</label>
					<div className={styles.inputWrapper}>
						{icon && (
							<Icon
								name={icon}
								size={24}
								className={clsx(styles.icon, error && styles.error, isValid && styles.valid)}
							/>
						)}
						<input
							id={props.name}
							ref={ref}
							className={clsx(
								styles.input,
								icon && styles.withIcon,
								isValid && styles.valid,
								error && styles.error,
								className ? className : '',
							)}
							type={showPassword ? 'text' : type}
							{...props}
						/>
						{error && <div className={styles.errorMessage}>*{error.message}</div>}
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

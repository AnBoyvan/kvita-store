import { clsx } from 'clsx';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

export const Button: React.FC<ButtonProps> = ({
	mode,
	variant,
	children,
	active,
	className,
	...props
}: ButtonProps) => {
	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.currentTarget.blur();
		props.onClick;
	};

	return (
		<button
			className={clsx(
				styles.button,
				styles[mode],
				variant && styles[variant],
				active && styles.active,
				className,
			)}
			onClick={handleClick}
			{...props}
		>
			{children}
		</button>
	);
};

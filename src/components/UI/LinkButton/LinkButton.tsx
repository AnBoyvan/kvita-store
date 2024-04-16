import { clsx } from 'clsx';
import Link from 'next/link';

import styles from './LinkButton.module.scss';
import type { LinkButtonProps } from './LinkButton.props';

export const LinkButton: React.FC<LinkButtonProps> = ({
	mode,
	variant,
	children,
	className,
	link,
	...props
}: LinkButtonProps) => {
	return (
		<Link
			href={link}
			className={clsx(styles.button, styles[mode], variant && styles[variant], className)}
			{...props}
		>
			{children}
		</Link>
	);
};

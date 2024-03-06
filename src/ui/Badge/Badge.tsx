import { BadgeProps } from './Badge.props';
import styles from './Badge.module.scss';
import clsx from 'clsx';

export const Badge: React.FC<BadgeProps> = ({
	variant,
	className,
	value,
	...props
}) => {
	switch (variant) {
		case 'novelty':
			return (
				<div className={styles.novelty} {...props}>
					новинка
				</div>
			);
		case 'promo':
			return (
				<div className={styles.promo} {...props}>
					-{value}%
				</div>
			);
		case 'count':
			return (
				<div className={clsx(styles.count, className)} {...props}>
					{value}
				</div>
			);
		default:
			return <></>;
	}
};

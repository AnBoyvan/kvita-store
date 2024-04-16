import clsx from 'clsx';

import styles from './Badge.module.scss';
import type { BadgeProps } from './Badge.props';

export const Badge: React.FC<BadgeProps> = ({ variant, className, value, ...props }) => {
	switch (variant) {
		case 'novelty':
			return (
				<div className={clsx(styles.novelty, className)} {...props}>
					новинка
				</div>
			);
		case 'promo':
			return (
				<div className={clsx(styles.promo, className)} {...props}>
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

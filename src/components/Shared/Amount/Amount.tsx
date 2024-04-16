import clsx from 'clsx';

import styles from './Amount.module.scss';
import type { AmountProps } from './Amount.props';

export const Amount: React.FC<AmountProps> = ({ title, bordered, className, children }) => {
	return (
		<div className={clsx(styles.amount, bordered && styles.bordered, className && className)}>
			{title && <span className={styles.title}>{title}</span>}
			<div className={styles.value}>{children}</div>
		</div>
	);
};

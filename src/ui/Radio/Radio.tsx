'use client';

import { RadioProps } from './Radio.props';
import styles from './Radio.module.scss';

export const Radio: React.FC<RadioProps> = ({
	children,
	...props
}) => {
	return (
		<label className={styles.label}>
			<input type="radio" className={styles.input} {...props} />
			<span>{children}</span>
		</label>
	);
};

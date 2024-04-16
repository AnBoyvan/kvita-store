import styles from './Radio.module.scss';
import type { RadioProps } from './Radio.props';

export const Radio: React.FC<RadioProps> = ({ children, ...props }) => {
	return (
		<label className={styles.label}>
			<input type="radio" className={styles.input} {...props} />
			<span>{children}</span>
		</label>
	);
};

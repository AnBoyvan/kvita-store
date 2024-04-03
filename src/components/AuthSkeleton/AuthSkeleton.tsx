import { Divider } from '..';

import styles from './AuthSkeleton.module.scss';

export const AuthSkeleton: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.field}>
				<div className={styles.text}></div>
			</div>
			<div className={styles.field}>
				<div className={styles.text}></div>
			</div>
			<div className={styles.button}></div>
			<div className={styles.text}></div>
			<Divider />
			<div className={styles.button}></div>
		</div>
	);
};

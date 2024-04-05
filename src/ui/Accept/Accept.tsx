'use client';

import styles from './Accept.module.scss';
import { AcceptProps } from './Accept.props';

import { Button } from '@/ui';

export const Accept: React.FC<AcceptProps> = ({ message, onAccept, onCancel, ...props }) => {
	const handleAccept = () => {
		onAccept();
	};

	const handleCancel = () => {
		onCancel();
	};

	return (
		<div className={styles.accept} {...props}>
			<p>{message}</p>
			<div className={styles.actions}>
				<Button mode="default" variant="ghost" onClick={handleCancel} className={styles.button}>
					Ні
				</Button>
				<Button mode="default" variant="primary" onClick={handleAccept} className={styles.button}>
					Так
				</Button>
			</div>
		</div>
	);
};

import styles from './Accept.module.scss';
import type { AcceptProps } from './Accept.props';

import { Button } from '@/components/UI';

export const Accept: React.FC<AcceptProps> = ({ type, message, onAccept, onCancel, ...props }) => {
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
				<Button
					type="button"
					mode="default"
					variant="ghost"
					onClick={handleCancel}
					className={styles.button}
				>
					Ні
				</Button>
				<Button
					mode="default"
					variant="primary"
					onClick={handleAccept}
					className={styles.button}
					type={type ? type : 'button'}
				>
					Так
				</Button>
			</div>
		</div>
	);
};

import styles from './Dialog.module.scss';
import { DialogProps } from './Dialog.props';

export const Dialog: React.FC<DialogProps> = ({ ...props }) => {
	return (
		<dialog className={styles.dialog} {...props}>
			Dialog
		</dialog>
	);
};

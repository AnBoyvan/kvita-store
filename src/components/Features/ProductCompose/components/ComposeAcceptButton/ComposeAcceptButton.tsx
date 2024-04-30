import styles from './ComposeAcceptButton.module.scss';
import type { ComposeAcceptButtonProps } from './ComposeAcceptButton.props';

import { Modal } from '@/components/Features';
import { Accept } from '@/components/Shared';
import { Button } from '@/components/UI';
import { useModal } from '@/hooks';

export const ComposeAcceptButton: React.FC<ComposeAcceptButtonProps> = ({ isNew, disabled }) => {
	const { modalRef, closeModal, openModal } = useModal();

	const handleAccept = () => {
		closeModal();
	};

	return (
		<div className={styles.wrapper}>
			<Button
				disabled={disabled}
				type="button"
				mode="default"
				variant="primary"
				onClick={openModal}
			>
				Готово
			</Button>
			<Modal ref={modalRef} container>
				<Accept
					type="submit"
					message={isNew ? 'Створити?' : 'Змінити?'}
					onAccept={handleAccept}
					onCancel={closeModal}
				/>
			</Modal>
		</div>
	);
};

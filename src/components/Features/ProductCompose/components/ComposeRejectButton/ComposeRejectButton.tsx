import styles from './ComposeRejectButton.module.scss';
import type { ComposeRejectButtonProps } from './ComposeRejectButton.props';

import { Modal } from '@/components/Features';
import { Accept } from '@/components/Shared';
import { Button } from '@/components/UI';
import { useModal } from '@/hooks';

export const ComposeRejectButton: React.FC<ComposeRejectButtonProps> = ({ action, disabled }) => {
	const { modalRef, closeModal, openModal } = useModal();

	return (
		<div className={styles.wrapper}>
			<Button disabled={disabled} type="button" mode="default" variant="ghost" onClick={openModal}>
				Відміна
			</Button>
			<Modal ref={modalRef} container>
				<Accept
					type="button"
					message={'Завершити без збереження?'}
					onAccept={action}
					onCancel={closeModal}
				/>
			</Modal>
		</div>
	);
};

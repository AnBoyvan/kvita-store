'use client';

import { ModalContext } from '@/hooks/useModal';
import { useContext } from 'react';
import styles from './Modal.module.scss';

export const Modal: React.FC = props => {
	const { modalContent, closeModal, isOpen } = useContext(ModalContext);

	const handleOverlayClick = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		if (e.target === e.currentTarget) {
			closeModal();
		}
	};

	return (
		<>
			{isOpen && (
				<div className={styles.overlay} onClick={handleOverlayClick}>
					<div className={styles.modal}>{modalContent}</div>
				</div>
			)}
		</>
	);
};

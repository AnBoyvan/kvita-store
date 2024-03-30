'use client';

import { ModalContext } from '@/hooks/useModal';
import { useContext, useEffect } from 'react';
import styles from './Modal.module.scss';

export const Modal: React.FC = props => {
	const { modalContent, closeModal, isOpen, modalOverlay } = useContext(ModalContext);

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.target === e.currentTarget) closeModal();
	};

	useEffect(() => {
		const handlePopState: () => void = () => {
			closeModal();
		};

		window.addEventListener('popstate', handlePopState);

		return () => {
			window.removeEventListener('popstate', handlePopState);
		};
	}, [closeModal]);

	return (
		<>
			{isOpen && (
				<div className={styles.overlay} onMouseDown={handleMouseDown}>
					{modalOverlay && <>{modalOverlay}</>}
					{modalContent && <div className={styles.modal}>{modalContent}</div>}
				</div>
			)}
		</>
	);
};

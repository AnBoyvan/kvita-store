'use client';

import { useContext } from 'react';

import styles from './CloseModalButton.module.scss';
import { CloseModalButtonProps } from './CloseModalButton.props';

import { ModalContext } from '@/hooks';
import { Button, Icon } from '@/ui';

export const CloseModalButton: React.FC<CloseModalButtonProps> = ({ ...props }) => {
	const { closeModal } = useContext(ModalContext);

	const handleCloseClick = () => {
		closeModal();
	};

	return (
		<Button mode="simple" onClick={handleCloseClick} className={styles.closeBtn} {...props}>
			<Icon name="X" />
		</Button>
	);
};

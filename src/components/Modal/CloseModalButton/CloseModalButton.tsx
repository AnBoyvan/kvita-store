'use client';

import { Button } from '@/ui/Button/Button';
import { CloseModalButtonProps } from './CloseModalButton.props';
import { Icon } from '@/ui/Icon/Icon';
import { ModalContext } from '@/hooks/useModal';
import styles from './CloseModalButton.module.scss';
import { useContext } from 'react';

export const CloseModalButton: React.FC<CloseModalButtonProps> = ({
	...props
}) => {
	const { closeModal } = useContext(ModalContext);

	const handleCloseClick = () => {
		closeModal();
	};

	return (
		<Button
			mode="simple"
			onClick={handleCloseClick}
			className={styles.closeBtn}
			{...props}
		>
			<Icon name="X" />
		</Button>
	);
};

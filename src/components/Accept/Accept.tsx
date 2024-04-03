'use client';

import { useContext } from 'react';

import styles from './Accept.module.scss';
import { AcceptProps } from './Accept.props';

import { ModalContext } from '@/hooks';
import { Button } from '@/ui';

export const Accept: React.FC<AcceptProps> = ({ message, onAccept, ...props }) => {
	const { closeModal } = useContext(ModalContext);

	const handleAccept = () => {
		onAccept();
		closeModal();
	};

	return (
		<div className={styles.accept} {...props}>
			<p>{message}</p>
			<div>
				<Button mode="default" variant="ghost" onClick={handleAccept}>
					Ні
				</Button>
				<Button mode="default" variant="primary" onClick={closeModal}>
					Так
				</Button>
			</div>
		</div>
	);
};

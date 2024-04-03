'use client';

import clsx from 'clsx';
import debounce from 'lodash.debounce';
import { useContext, useEffect, useState } from 'react';

import styles from './Menu.module.scss';
import { MenuProps } from './Menu.props';

import { ModalContext } from '@/hooks/useModal';

export const Menu: React.FC<MenuProps> = ({ position, closed, className, children }: MenuProps) => {
	const [close, setClose] = useState<boolean>(false);
	const { closeModal } = useContext(ModalContext);

	const handleClose = () => {
		setClose(true);
		closeModalWindow();
	};

	const handleMenuOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.target === e.currentTarget) handleClose();
	};

	const closeModalWindow = debounce(() => {
		closeModal();
	}, 300);

	useEffect(() => {
		if (closed) handleClose();
	}, [closed]);

	return (
		<div className={styles.menuOverlay} onClick={handleMenuOverlayClick}>
			<div
				className={clsx(
					styles.menu,
					styles[position],
					close && styles.close,
					className && className,
				)}
			>
				{children}
			</div>
		</div>
	);
};

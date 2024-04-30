'use client';

import clsx from 'clsx';
import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

import styles from './BurgerMenu.module.scss';
import type { BurgerMenuProps } from './BurgerMenu.props';

import { Icon, Navigation } from '@/components/Shared';
import { Button, ThemeSwitcher } from '@/components/UI';

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClose }) => {
	const [closed, setSlosed] = useState<boolean>(false);

	const handleClose = () => {
		setSlosed(true);
		closeModalWindow();
	};

	const handleMenuOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.target === e.currentTarget) handleClose();
	};

	const handleEscape = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			handleClose();
		}
	};

	const closeModalWindow = debounce(() => {
		onClose();
	}, 300);

	useEffect(() => {
		if (closed) handleClose();
	}, [closed]);

	useEffect(() => {
		document.addEventListener('keydown', handleEscape);
		return () => {
			document.removeEventListener('keydown', handleEscape);
		};
	}, []);

	useEffect(() => {
		if (!closed) {
			document.documentElement.style.overflow = 'hidden';
		} else {
			document.documentElement.style.overflow = '';
		}

		return () => {
			document.documentElement.style.overflow = '';
		};
	}, [closed]);

	return (
		<div className={styles.menuOverlay} onMouseDown={handleMenuOverlayClick}>
			<div className={clsx(styles.menu, closed && styles.close)}>
				<Button mode="simple" className={styles.closeBtn} onClick={handleClose}>
					<Icon name="X" />
				</Button>
				<ThemeSwitcher className={styles.switcher} />
				<Navigation action={handleClose} className={styles.nav} />
			</div>
		</div>
	);
};

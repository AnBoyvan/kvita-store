'use client';

import clsx from 'clsx';
import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

import styles from './TableFilterComponents.module.scss';
import { TableFilterMenuProps } from './TableFilterComponents.props';

import { Icon } from '@/components/Shared';
import { Button } from '@/components/UI';

export const TableFilterMenu: React.FC<TableFilterMenuProps> = ({
	children,
	resetFilter,
	setIsOpen,
}) => {
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
		setIsOpen(false);
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
		<div className={styles.menuOverlay} onClick={handleMenuOverlayClick}>
			<div className={clsx(styles.menu, closed && styles.close)}>
				<div className={styles.filters}>{children}</div>
				<div className={styles.menuButtons}>
					<Button mode="wide" variant="primary" onClick={handleClose}>
						Готово
					</Button>
					<Button mode="wide" variant="ghost" onClick={() => resetFilter([])}>
						Скинути
					</Button>
				</div>
				<Button mode="simple" className={styles.closeBtn} onClick={handleClose}>
					<Icon name="X" />
				</Button>
			</div>
		</div>
	);
};

'use client';

import clsx from 'clsx';
import { forwardRef, type ForwardedRef } from 'react';

import styles from './Modal.module.scss';
import type { ModalProps } from './Modal.props';

import { Icon } from '@/components/Shared';
import { Button } from '@/components/UI';

export const Modal = forwardRef(
	(
		{ centered, className, children, container, button, onClose, ...props }: ModalProps,
		ref: ForwardedRef<HTMLDialogElement>,
	) => {
		const handleClose = () => {
			if (ref && 'current' in ref && ref.current) {
				ref.current.close();
			}
			if (onClose) onClose();
		};

		const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
			if (e.target === e.currentTarget) {
				handleClose();
			}
		};

		return (
			<dialog
				ref={ref}
				className={clsx(styles.dialog, (centered || container) && styles.centered, className)}
				onMouseDown={handleBackdropClick}
				{...props}
			>
				{button && (
					<Button mode="simple" onClick={handleClose} className={styles.closeBtn}>
						<Icon name="X" />
					</Button>
				)}

				<div className={clsx(container ? styles.container : styles.wrapper)}>{children}</div>
			</dialog>
		);
	},
);

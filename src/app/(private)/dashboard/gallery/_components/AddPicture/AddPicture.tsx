'use client';

import styles from './AddPicture.module.scss';
import type { AddPictureProps } from './AddPicture.props';

import { Modal, PictureCompose } from '@/components/Features';
import { Icon } from '@/components/Shared';
import { Button } from '@/components/UI';
import { useModal } from '@/hooks';

export const AddPicture: React.FC<AddPictureProps> = ({ tags, ...props }) => {
	const { modalRef, openModal, closeModal } = useModal();
	return (
		<div className={styles.wrapper} {...props}>
			<Button mode="default" variant="primary" type="button" onClick={openModal}>
				<span>Додати фото</span>
				<Icon name="Plus" />
			</Button>

			<Modal ref={modalRef} container>
				<PictureCompose tags={tags} isNew={true} onClose={closeModal} />
			</Modal>
		</div>
	);
};

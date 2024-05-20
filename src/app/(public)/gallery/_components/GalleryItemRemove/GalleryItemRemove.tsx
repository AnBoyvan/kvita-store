'use client';

import { useEffect } from 'react';

import type { GalleryItemRemoveProps } from './GalleryItemRemove.props';

import { Modal } from '@/components/Features';
import { Accept } from '@/components/Shared';
import { useModal, useMutatePictures } from '@/hooks';

export const GalleryItemRemove: React.FC<GalleryItemRemoveProps> = ({
	removePicture,
	setRemovePicture,
}) => {
	const { modalRef, closeModal, openModal } = useModal();
	const { remove } = useMutatePictures();

	const handleAccept = () => {
		if (removePicture) remove(removePicture?._id);
		handleClose();
	};

	const handleClose = () => {
		setRemovePicture(null);
		closeModal();
	};

	useEffect(() => {
		if (removePicture) openModal();
	}, [removePicture]);

	return (
		<Modal ref={modalRef} container onClose={() => setRemovePicture(null)}>
			<Accept
				type="button"
				message={'Видалити фото?'}
				onAccept={handleAccept}
				onCancel={handleClose}
			/>
		</Modal>
	);
};

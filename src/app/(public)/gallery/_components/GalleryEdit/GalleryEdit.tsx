'use client';

import { useEffect } from 'react';

import type { GalleryEditProps } from './GalleryEdit.props';

import { Modal, PictureCompose } from '@/components/Features';
import { useModal } from '@/hooks';

export const GalleryEdit: React.FC<GalleryEditProps> = ({ picture, setCompose, tags }) => {
	const { modalRef, openModal, closeModal } = useModal();

	const handleClose = () => {
		closeModal();
		setCompose();
	};

	useEffect(() => {
		if (picture) openModal();
	}, [picture]);

	return (
		<Modal ref={modalRef} container onClose={handleClose}>
			{picture && (
				<PictureCompose picture={picture} tags={tags} isNew={false} onClose={handleClose} />
			)}
		</Modal>
	);
};

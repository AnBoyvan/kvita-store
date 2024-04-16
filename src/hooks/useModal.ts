import { useRef } from 'react';

export const useModal = () => {
	const modalRef = useRef<HTMLDialogElement>(null);

	const openModal = () => modalRef.current!.showModal();

	const closeModal = () => {
		const openedModal =
			typeof document !== 'undefined'
				? document.querySelector<HTMLDialogElement>('dialog[open]')
				: null;

		if (openedModal) {
			openedModal.close();
		}
	};

	return { modalRef, openModal, closeModal };
};

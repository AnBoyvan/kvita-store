import { ReactNode, createContext, useEffect, useState } from 'react';

interface IModalContext {
	isOpen: boolean;
	modalContent: ReactNode;
	openModal: (content: ReactNode) => void;
	closeModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
	isOpen: false,
	modalContent: null,
	openModal: () => {},
	closeModal: () => {},
});

export const useModal = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const [modalContent, setModalContent] = useState<ReactNode>(null);
	const bodyElement =
		typeof document !== 'undefined'
			? document.querySelector<'body'>('body')
			: null;

	const openModal = (content: ReactNode) => {
		setIsOpen(true);
		setModalContent(content);
		if (bodyElement) bodyElement.style.overflow = 'hidden';
		window.addEventListener('popstate', handlePopstate);
	};

	const closeModal = () => {
		setIsOpen(false);
		setModalContent(null);
		if (bodyElement) bodyElement.style.overflow = 'auto';
		window.removeEventListener('popstate', handlePopstate);
	};

	const handlePopstate = () => {
		closeModal();
		window.history.replaceState({ modal: true }, '');
	};

	useEffect(() => {
		const handleEscButton = (e: KeyboardEvent) => {
			if (e.code === 'Escape') {
				closeModal();
			}
		};
		if (isOpen) {
			window.addEventListener('keydown', handleEscButton);
			if (bodyElement) bodyElement.style.overflow = 'hidden';
		} else {
			window.removeEventListener('keydown', handleEscButton);
			if (bodyElement) bodyElement.style.overflow = 'auto';
		}

		return () => {
			window.removeEventListener('keydown', handleEscButton);
			if (bodyElement) bodyElement.style.overflow = 'auto';
		};
	}, [isOpen]);

	return { isOpen, modalContent, openModal, closeModal };
};

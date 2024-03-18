import { ReactNode, createContext, useEffect, useState } from 'react';

interface IModalContext {
	isOpen: boolean;
	modalContent?: ReactNode;
	modalOverlay?: ReactNode;
	openModal: (content: ReactNode) => void;
	openOverlay: (content: ReactNode) => void;
	closeModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
	isOpen: false,
	modalContent: null,
	modalOverlay: null,
	openModal: () => {},
	openOverlay: () => {},
	closeModal: () => {},
});

export const useModal = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [modalContent, setModalContent] = useState<ReactNode>(null);
	const [modalOverlay, setModalOverlay] = useState<ReactNode>(null);

	const bodyElement =
		typeof document !== 'undefined' ? document.querySelector<'body'>('body') : null;

	const openModal = (content: ReactNode) => {
		setIsOpen(true);
		setModalContent(content);
		if (bodyElement) {
			bodyElement.style.overflow = 'hidden';
			bodyElement.style.marginRight = '6px';
		}
	};

	const openOverlay = (content: ReactNode) => {
		setIsOpen(true);
		setModalOverlay(content);
		if (bodyElement) {
			bodyElement.style.overflow = 'hidden';
			bodyElement.style.marginRight = '6px';
		}
	};

	const closeModal = () => {
		setIsOpen(false);
		setModalContent(null);
		setModalOverlay(null);
		if (bodyElement) {
			bodyElement.style.overflow = 'auto';
			bodyElement.style.marginRight = 'auto';
		}
	};

	useEffect(() => {
		const handleEscButton = (e: KeyboardEvent) => {
			if (e.code === 'Escape') {
				closeModal();
			}
		};
		if (isOpen) {
			window.addEventListener('keydown', handleEscButton);
			if (bodyElement) {
				bodyElement.style.overflow = 'hidden';
				bodyElement.style.marginRight = '6px';
			}
		} else {
			window.removeEventListener('keydown', handleEscButton);
			if (bodyElement) {
				bodyElement.style.overflow = 'auto';
				bodyElement.style.marginRight = 'auto';
			}
		}

		return () => {
			window.removeEventListener('keydown', handleEscButton);
			if (bodyElement) {
				bodyElement.style.overflow = 'auto';
				bodyElement.style.marginRight = 'auto';
			}
		};
	}, [isOpen]);

	return { isOpen, modalContent, openModal, closeModal, modalOverlay, openOverlay };
};

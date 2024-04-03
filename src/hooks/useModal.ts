'use client';

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

	const htmlElement =
		typeof document !== 'undefined' ? document.querySelector<'html'>('html') : null;

	const isScrollBar =
		typeof document !== 'undefined' ? document.body.scrollHeight > window.innerHeight : null;

	const openModal = (content: ReactNode) => {
		setIsOpen(true);
		setModalContent(content);
		if (htmlElement && isScrollBar) {
			htmlElement.classList.add('scrollblock');
		}
	};

	const openOverlay = (content: ReactNode) => {
		setIsOpen(true);
		setModalOverlay(content);
		if (htmlElement && isScrollBar) {
			htmlElement.classList.add('scrollblock');
		}
	};

	const closeModal = () => {
		setIsOpen(false);
		setModalContent(null);
		setModalOverlay(null);
		if (htmlElement) {
			htmlElement.classList.remove('scrollblock');
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
			if (htmlElement && isScrollBar) {
				htmlElement.classList.add('scrollblock');
			}
		} else {
			window.removeEventListener('keydown', handleEscButton);
			if (htmlElement) {
				htmlElement.classList.remove('scrollblock');
			}
		}

		return () => {
			window.removeEventListener('keydown', handleEscButton);
			if (htmlElement) {
				htmlElement.classList.remove('scrollblock');
			}
		};
	}, [isOpen]);

	return {
		isOpen,
		modalContent,
		modalOverlay,
		openModal,
		openOverlay,
		closeModal,
	};
};

import { ModalContext, useModal } from '@/hooks/useModal';
import { PropsWithChildren } from 'react';

export const ModalProvider = ({ children }: PropsWithChildren) => {
	const modal = useModal();

	return <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>;
};

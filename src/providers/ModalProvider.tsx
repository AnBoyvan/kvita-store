import { PropsWithChildren } from 'react';

import { ModalContext, useModal } from '@/hooks';

export const ModalProvider = ({ children }: PropsWithChildren) => {
	const modal = useModal();

	return <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>;
};

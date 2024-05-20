'use client';

import { useEffect, useState } from 'react';

import { OrdersTableModal } from '../OrdersTableModal/OrdersTableModal';

import type { OrdersTableUpdateProps } from './OrdersTableUpdate.props';

import { Modal } from '@/components/Features';
import { Icon } from '@/components/Shared';
import { Button } from '@/components/UI';
import { useModal } from '@/hooks';

export const OrdersTableUpdate: React.FC<OrdersTableUpdateProps> = ({ order }) => {
	const [open, setOpen] = useState<boolean>(false);

	const { modalRef, openModal, closeModal } = useModal();

	useEffect(() => {
		if (open) openModal();
	}, [open]);

	return (
		<>
			<Button mode="link" type="button" onClick={() => setOpen(true)}>
				<Icon name="PencilLine" />
			</Button>

			{open && (
				<Modal ref={modalRef} container onClose={() => setOpen(false)} className="mobile:w-full">
					<OrdersTableModal
						order={order}
						action={() => {
							setOpen(false);
							closeModal();
						}}
					/>
				</Modal>
			)}
		</>
	);
};

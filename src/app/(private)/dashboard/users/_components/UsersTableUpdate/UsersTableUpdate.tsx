'use client';

import { useEffect, useState } from 'react';

import { UsersTableModal } from '../UsersTableModal/UsersTableModal';

import type { UsersTableUpdateProps } from './UsersTableUpdate.props';

import { Modal } from '@/components/Features';
import { Icon } from '@/components/Shared';
import { Button } from '@/components/UI';
import { useModal } from '@/hooks';

export const UsersTableUpdate: React.FC<UsersTableUpdateProps> = ({ user }) => {
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
				<Modal ref={modalRef} container onClose={() => setOpen(false)}>
					<UsersTableModal
						user={user}
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

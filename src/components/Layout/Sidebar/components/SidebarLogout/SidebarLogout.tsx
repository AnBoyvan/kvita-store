import { signOut } from 'next-auth/react';

import styles from './SidebarLogout.module.scss';
import type { SidebarLogoutProps } from './SidebarLogout.props';

import { Modal } from '@/components/Features';
import { Accept, Icon } from '@/components/Shared';
import { useModal } from '@/hooks';
import { useCartStore, useUserStore } from '@/store';

export const SidebarLogout: React.FC<SidebarLogoutProps> = ({ ...props }) => {
	const { logout } = useUserStore();
	const { clearCartStore } = useCartStore();
	const { modalRef, closeModal, openModal } = useModal();

	const handleLogout = () => {
		signOut({ callbackUrl: '/' });
		logout();
		clearCartStore();
		closeModal();
	};

	return (
		<>
			<button type="button" className={styles.button} {...props} onClick={openModal}>
				<div className={styles.icon}>
					<Icon name="LogOut" size={24} />
				</div>
				<span className={styles.title}>Вихід</span>
			</button>

			<Modal ref={modalRef} container>
				<Accept message="Бажаєте вийти?" onAccept={handleLogout} onCancel={closeModal} />
			</Modal>
		</>
	);
};

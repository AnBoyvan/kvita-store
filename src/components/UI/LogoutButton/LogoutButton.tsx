'use client';

import { signOut } from 'next-auth/react';

import styles from './LogoutButton.module.scss';

import { Button } from '@/components/UI';
import { useUserStore } from '@/store';

export const LogoutButton = () => {
	const { logout } = useUserStore();

	const handleClick = () => {
		signOut();
		logout();
	};

	return (
		<>
			<Button mode="wide" className={styles.button} onClick={handleClick}>
				Logout
			</Button>
		</>
	);
};

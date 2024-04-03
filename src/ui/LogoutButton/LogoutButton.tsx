'use client';

import { signOut } from 'next-auth/react';

import styles from './LogoutButton.module.scss';

import { useUserStore } from '@/store';
import { Button } from '@/ui';

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

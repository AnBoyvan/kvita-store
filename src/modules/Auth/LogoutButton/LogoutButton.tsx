import { Button } from '@/ui/Button/Button';
import styles from './LogoutButton.module.scss';
import { signOut } from 'next-auth/react';

export const LogoutButton = () => {
	const handleClick = () => {
		signOut();
	};

	return (
		<>
			<Button mode="wide" className={styles.button} onClick={handleClick}>
				Logout
			</Button>
		</>
	);
};

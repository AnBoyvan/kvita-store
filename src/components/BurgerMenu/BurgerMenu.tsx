'use client';

import { useState } from 'react';

import styles from './BurgerMenu.module.scss';
import { BurgerMenuProps } from './BurgerMenu.props';

import { Menu, Navigation } from '@/components';
import { Button, Icon, LogoutButton, ThemeSwitcher } from '@/ui';

export const BurgerMenu: React.FC<BurgerMenuProps> = () => {
	const [closed, setSlosed] = useState<boolean>(false);

	const handleClose = () => {
		setSlosed(true);
	};

	return (
		<Menu position="left" closed={closed}>
			<Button mode="simple" className={styles.closeBtn} onClick={handleClose}>
				<Icon name="X" />
			</Button>
			<ThemeSwitcher className={styles.switcher} />
			<Navigation action={handleClose} className={styles.nav} />
			<LogoutButton />
		</Menu>
	);
};

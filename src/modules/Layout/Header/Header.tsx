'use client';

import { Button } from '@/ui/Button/Button';
import styles from './Header.module.scss';
import { Icon } from '@/ui/Icon/Icon';
import { Logo } from '@/ui/Logo/Logo';
import { ModalContext } from '@/hooks/useModal';
import { useContext, useState } from 'react';
import { Auth } from '@/modules/Auth/Auth';
import { Menu } from './Menu/Menu';
import { ThemeSwitcher } from '@/ui/ThemeSwitcher/ThemeSwitcher';

export const Header: React.FC = () => {
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	const { openModal } = useContext(ModalContext);

	const handleMenuClick = () => {
		setOpenMenu(!openMenu);
	};

	const handleCartClick = () => {};

	const handleSearchClick = () => {};

	const handleLoginClick = () => {
		openModal(<Auth />);
	};

	return (
		<header className={styles.header}>
			<Button
				mode="simple"
				className={styles.menuBtn}
				onClick={handleMenuClick}
			>
				<Icon name={`${openMenu ? 'X' : 'Menu'}`} />
			</Button>
			<Logo />
			<div className={styles.wrapper}>
				<Button mode="simple">
					<Icon name="Search" />
				</Button>
				<Button mode="simple">
					<Icon name="ShoppingCart" />
				</Button>
				<Button mode="simple" onClick={handleLoginClick}>
					<Icon name="LogIn" />
				</Button>
				<ThemeSwitcher className={styles.switcher} />
			</div>
			<Menu open={openMenu} close={setOpenMenu} />
		</header>
	);
};

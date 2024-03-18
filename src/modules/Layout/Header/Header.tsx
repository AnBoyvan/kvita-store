'use client';

import { Button } from '@/ui/Button/Button';
import styles from './Header.module.scss';
import { Icon } from '@/ui/Icon/Icon';
import { Logo } from '@/ui/Logo/Logo';
import { ModalContext } from '@/hooks/useModal';
import { useContext } from 'react';
import { Auth } from '@/modules/Auth/Auth';
import { Menu } from './Menu/Menu';
import { ThemeSwitcher } from '@/ui/ThemeSwitcher/ThemeSwitcher';
import { Navigation } from '@/components/Navigation/Navigation';
import { SearchModal } from './SearchModal/SearchModal';
import { useAuth } from '@/hooks/useAuth';
import { CartCount } from './CartCount/CartCount';
import Link from 'next/link';
import { PAGES } from '@/configs/pages-url.config';
import { CloseModalButton } from '@/components/Modal/CloseModalButton/CloseModalButton';
import { CartModal } from './CartModal/CartModal';

export const Header: React.FC = () => {
	const { openModal, openOverlay } = useContext(ModalContext);
	const { isLoggedIn } = useAuth();

	const handleMenuClick = () => {
		openOverlay(<Menu />);
	};

	const handleSearchClick = () => {
		openOverlay(<SearchModal />);
	};

	const handleCartClick = () => {
		openModal(<CartModal />);
	};

	const handleLoginClick = () => {
		openModal(
			<>
				<CloseModalButton />
				<Auth />
			</>,
		);
	};

	return (
		<header className={styles.header}>
			<Button mode="simple" className={styles.menuBtn} onClick={handleMenuClick}>
				<Icon name="Menu" />
			</Button>
			<Logo />
			<Navigation className={styles.nav} />
			<div className={styles.wrapper}>
				<Button mode="simple" onClick={handleSearchClick}>
					<Icon name="Search" />
				</Button>
				<Button mode="simple" className={styles.cartButton} onClick={handleCartClick}>
					<Icon name="ShoppingCart" />
					<CartCount />
				</Button>
				{isLoggedIn ? (
					<Link href={PAGES.CABINET_INFO} className={styles.cabinet}>
						<Icon name="User" />
					</Link>
				) : (
					<Button mode="simple" onClick={handleLoginClick}>
						<Icon name="LogIn" />
					</Button>
				)}
				<ThemeSwitcher className={styles.switcher} />
			</div>
		</header>
	);
};

'use client';

import Link from 'next/link';
import React, { useContext } from 'react';

import styles from './Header.module.scss';

import { BurgerMenu, Cart, Navigation, Search } from '@/components';
import { Auth } from '@/components/Auth/Auth';
import { PAGES } from '@/configs';
import { ModalContext } from '@/hooks';
import { useCartStore, useUserStore } from '@/store';
import { Badge, Button, CloseModalButton, Icon, Logo, ThemeSwitcher } from '@/ui';

export const Header: React.FC = () => {
	const { openModal, openOverlay } = useContext(ModalContext);
	const { user } = useUserStore();
	const { cart } = useCartStore();

	const handleMenuClick = () => {
		openOverlay(<BurgerMenu />);
	};

	const handleSearchClick = () => {
		openOverlay(<Search />);
	};

	const handleCartClick = () => {
		openModal(<Cart />);
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
					{cart.length > 0 && (
						<Badge variant="count" value={cart.length} className={styles.count} />
					)}
				</Button>
				{user.isLoggedIn ? (
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

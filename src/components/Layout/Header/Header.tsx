'use client';

import Link from 'next/link';
import React from 'react';

import { HeaderAuth, HeaderCart, HeaderMenu, HeaderSearch } from './components';
import styles from './Header.module.scss';

import { Icon, Logo, Navigation } from '@/components/Shared';
import { ThemeSwitcher } from '@/components/UI';
import { PAGES } from '@/configs';
import { useUserStore } from '@/store';

export const Header: React.FC = () => {
	const { user } = useUserStore();

	return (
		<header className={styles.header}>
			<HeaderMenu />
			<Logo />
			<Navigation className={styles.nav} />
			<div className={styles.wrapper}>
				<HeaderSearch />
				<HeaderCart />
				{user.isLoggedIn ? (
					<Link href={PAGES.CABINET_INFO} className={styles.cabinet}>
						<Icon name="User" />
					</Link>
				) : (
					<HeaderAuth />
				)}
				<ThemeSwitcher className={styles.switcher} />
			</div>
		</header>
	);
};

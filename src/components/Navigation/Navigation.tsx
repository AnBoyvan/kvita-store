'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Navigation.module.scss';
import { NavigationProps } from './Navigation.props';

import { NAVIGATION } from '@/configs';

export const Navigation: React.FC<NavigationProps> = ({ action, className, ...props }) => {
	const pathname = usePathname();

	const nav = NAVIGATION.map(({ page, title }) => {
		return (
			<li key={page} className={styles.item}>
				<Link
					href={page}
					className={clsx(styles.link, page === pathname ? styles.active : '')}
					onClick={action}
				>
					{title}
				</Link>
			</li>
		);
	});

	return (
		<ul className={clsx(styles.menu, className)} {...props}>
			{nav}
		</ul>
	);
};

'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

import styles from './SidebarLink.module.scss';
import { SidebarLinkProps } from './SidebarLink.props';

import { Icon } from '@/ui';

export const SidebarLink: React.FC<SidebarLinkProps> = ({
	page,
	title,
	icon,
	className,
	...props
}) => {
	const [count, setCount] = useState<number | null>(null);

	// useEffect(() => {
	// 	if (page === PAGES.DASHBOARD_ORDERS && !count) {
	// 		console.log(page);
	// 		setCount(1);
	// 	}
	// });

	return (
		<li className={clsx(styles.wrapper, className)} {...props}>
			<Link href={page} className={styles.link}>
				<div className={styles.icon}>
					<Icon name={icon} size={24} />
				</div>

				<span className={styles.title}>{title}</span>
			</Link>
		</li>
	);
};

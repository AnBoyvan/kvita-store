'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { OrdersCounter } from '../OrdersCounter/OrdersCounter';

import styles from './SidebarLink.module.scss';
import { SidebarLinkProps } from './SidebarLink.props';

import { Icon } from '@/components/Shared';
import { PAGES } from '@/configs';

export const SidebarLink: React.FC<SidebarLinkProps> = ({
	page,
	title,
	icon,
	className,
	...props
}) => {
	const pathname = usePathname();

	const isOrders = page === PAGES.DASHBOARD_ORDERS;

	return (
		<li className={clsx(styles.wrapper, className)} {...props}>
			<Link href={page} className={clsx(styles.link, page === pathname ? styles.active : '')}>
				<div className={styles.icon}>
					{isOrders && <OrdersCounter />}
					<Icon name={icon} size={24} />
				</div>

				<span className={styles.title}>{title}</span>
			</Link>
		</li>
	);
};

'use client';

import styles from './Sidebar.module.scss';
import { SidebarList } from './components';

import { Divider } from '@/components';
import { CABINET, DASBOARD } from '@/configs';
import { useUserStore } from '@/store';

export const Sidebar: React.FC = () => {
	const { user } = useUserStore();

	return (
		<aside className={styles.sidebar}>
			<SidebarList nav={DASBOARD} className="-ml-2" />
			<Divider />
			<SidebarList nav={CABINET} className="-ml-2" />
			<Divider />
		</aside>
	);
};

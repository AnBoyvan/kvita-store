'use client';

import styles from './Sidebar.module.scss';
import { SidebarList, SidebarLogout } from './components';

import { Divider } from '@/components/Shared';
import { CABINET, DASBOARD } from '@/configs';
import { useUserStore } from '@/store';
import { isManager } from '@/utils/helpers';

export const Sidebar: React.FC = () => {
	const { user } = useUserStore();

	return (
		<aside className={styles.sidebar}>
			{isManager(user.role) && (
				<>
					<SidebarList nav={DASBOARD} className="-ml-2" />
					<Divider />
				</>
			)}

			<SidebarList nav={CABINET} className="-ml-2" />
			<Divider />
			<SidebarLogout />
		</aside>
	);
};

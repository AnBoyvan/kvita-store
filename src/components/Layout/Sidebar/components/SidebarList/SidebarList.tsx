import { SidebarLink } from '..';

import styles from './SidebarList.module.scss';
import type { SidebarListProps } from './SidebarList.props';

export const SidebarList: React.FC<SidebarListProps> = ({ nav, ...props }) => {
	return (
		<ul className={styles.list} {...props}>
			{nav.map(({ page, title, icon }) => (
				<SidebarLink key={page} page={page} title={title} icon={icon} />
			))}
		</ul>
	);
};

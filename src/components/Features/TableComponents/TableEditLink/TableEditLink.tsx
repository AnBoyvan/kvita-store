import Link from 'next/link';

import styles from './TableEditLink.module.scss';
import type { TableEditLinkProps } from './TableEditLink.props';

import { Icon } from '@/components/Shared';

export const TableEditLink: React.FC<TableEditLinkProps> = ({ ...props }) => {
	return (
		<Link className={styles.link} {...props}>
			<Icon name="PencilLine" />
		</Link>
	);
};

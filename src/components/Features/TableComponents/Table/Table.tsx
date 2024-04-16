'use client';

import styles from './Table.module.scss';
import type { TableProps } from './Table.props';

export const Table: React.FC<TableProps> = ({ children, ...props }) => {
	return (
		<table className={styles.table} {...props}>
			{children}
		</table>
	);
};

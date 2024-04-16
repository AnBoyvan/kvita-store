import styles from './TableHead.module.scss';
import type { TableHeadProps } from './TableHead.props';

export const TableHead: React.FC<TableHeadProps> = ({ children, ...props }) => {
	return (
		<thead className={styles.tableHead} {...props}>
			{children}
		</thead>
	);
};

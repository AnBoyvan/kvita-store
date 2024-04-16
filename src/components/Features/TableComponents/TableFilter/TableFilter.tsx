import styles from './TableFilter.module.scss';
import type { TableFilterProps } from './TableFilter.props';

export const TableFilter: React.FC<TableFilterProps> = ({ ...props }) => {
	return (
		<div className={styles.wrapper} {...props}>
			TableFilter
		</div>
	);
};

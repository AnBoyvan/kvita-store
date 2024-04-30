import clsx from 'clsx';

import styles from './TableCell.module.scss';
import type { TableCellProps } from './TableCell.props';

import { Icon } from '@/components/Shared';

export const TableCell: React.FC<TableCellProps> = ({
	header,
	visibility,
	children,
	canSort,
	sort,
	isSorted,
	className,
	...props
}) => {
	return (
		<td
			className={clsx(
				className,
				styles.cell,
				header && styles.header,
				visibility && styles[visibility],
				canSort && styles.sort,
			)}
			onClick={sort}
			{...props}
		>
			{children}
			{isSorted && <Icon name={isSorted === 'asc' ? 'ArrowUpNarrowWide' : 'ArrowDownNarrowWide'} />}
		</td>
	);
};

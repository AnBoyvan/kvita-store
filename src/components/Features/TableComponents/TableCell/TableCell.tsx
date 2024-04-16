import clsx from 'clsx';

import styles from './TableCell.module.scss';
import type { TableCellProps } from './TableCell.props';

export const TableCell: React.FC<TableCellProps> = ({
	header,
	visibility,
	children,
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
			)}
			{...props}
		>
			{children}
		</td>
	);
};

import clsx from 'clsx';

import styles from './TableRow.module.scss';
import type { TableRowProps } from './TableRow.props';

export const TableRow: React.FC<TableRowProps> = ({
	children,
	green,
	blue,
	red,
	gray,
	className,
	link,
	...props
}) => {
	return (
		<tr
			className={clsx(
				styles.row,
				green && styles.green,
				blue && styles.blue,
				red && styles.red,
				gray && styles.gray,
				className,
				link && styles.link,
			)}
			{...props}
		>
			{children}
		</tr>
	);
};

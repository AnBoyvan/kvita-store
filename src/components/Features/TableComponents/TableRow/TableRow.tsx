import clsx from 'clsx';

import styles from './TableRow.module.scss';
import type { TableRowProps } from './TableRow.props';

import { tableRowColor } from '@/utils/helpers';

export const TableRow = ({ children, dataType, data, link }: TableRowProps) => {
	const colorSchema = data && styles[tableRowColor(dataType, data)];

	return (
		<tr
			className={clsx(
				styles.row,
				dataType && styles[dataType],
				colorSchema && colorSchema,
				// dataType && data && styles[tableRowColor(dataType, data)],
				// green && styles.green,
				// blue && styles.blue,
				// red && styles.red,
				// gray && styles.gray,
				link && styles.link,
			)}
		>
			{children}
		</tr>
	);
};

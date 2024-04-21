import type { ChangeEvent } from 'react';

import styles from './TableFilterComponents.module.scss';
import type { TableFilterComponentProps } from './TableFilterComponents.props';

import { Select } from '@/components/UI';

export const TableFilterSelect: React.FC<TableFilterComponentProps> = ({
	id,
	title,
	data,
	filter,
	setFilter,
}) => {
	const current = filter.find(i => i.id === id);

	const currentValue = (current?.value as string) || '';

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;

		if (!current) {
			setFilter(prev => [...prev, { id, value: [value] }]);
		} else {
			setFilter(prev => prev.map(item => (item.id === id ? { id, value } : item)));
		}
	};

	return (
		<div className={styles.filterItem}>
			<div className={styles.title}>{title}</div>
			<Select defaultValue={currentValue} options={data || []} onChange={handleChange} />
		</div>
	);
};

import type { ChangeEvent } from 'react';

import styles from './TableFilterComponents.module.scss';
import type { TableFilterComponentProps } from './TableFilterComponents.props';

import { Checkbox } from '@/components/UI';

export const TableFilterGroup: React.FC<TableFilterComponentProps> = ({
	id,
	title,
	data,
	filter,
	setFilter,
}) => {
	const current = filter.find(i => i.id === id);

	const currentValue = (current?.value as string[]) || [];

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		if (!current) {
			setFilter(prev => [...prev, { id, value: [value] }]);
		} else {
			const updated = currentValue.includes(value)
				? currentValue.filter(v => v !== value)
				: [...currentValue, value];

			setFilter(prev => prev.map(item => (item.id === id ? { id, value: updated } : item)));
		}
	};

	const group = data?.map(({ title, value }, index) => (
		<Checkbox
			key={index}
			checked={currentValue.includes(value?.toString())}
			value={value.toString()}
			variant="rect"
			onChange={handleChange}
		>
			{title}
		</Checkbox>
	));

	return (
		<div className={styles.group}>
			<div className={styles.title}>{title}</div>
			{group}
		</div>
	);
};

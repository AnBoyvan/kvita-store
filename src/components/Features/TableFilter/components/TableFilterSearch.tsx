import { ChangeEvent } from 'react';

import styles from './TableFilterComponents.module.scss';
import { TableFilterComponentProps } from './TableFilterComponents.props';

import { Input } from '@/components/UI';

export const TableFilterSearch: React.FC<TableFilterComponentProps> = ({
	id,
	filter,
	setFilter,
}) => {
	const current = (filter.find(i => i.id === id)?.value as string) || '';

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		setFilter(prev =>
			prev
				.filter(f => f.id !== id)
				.concat({
					id,
					value,
				}),
		);
	};

	return (
		<Input
			name={id}
			icon="Search"
			type="text"
			value={current}
			onChange={handleChange}
			className={styles.search}
		/>
	);
};

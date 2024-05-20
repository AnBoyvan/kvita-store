'use client';

import clsx from 'clsx';
import Select, { ActionMeta, SingleValue } from 'react-select';

import styles from './TableFilterComponents.module.scss';
import type { SelectOption, TableFilterComponentProps } from './TableFilterComponents.props';

export const TableFilterItems: React.FC<TableFilterComponentProps> = ({
	id,
	title,
	items,
	filter,
	setFilter,
}) => {
	const current = filter.find(i => i.id === id);

	const handleChange = (
		selectedOption: SingleValue<SelectOption>,
		actionMeta: ActionMeta<SelectOption>,
	) => {
		if (!selectedOption) return;

		if (!current) {
			setFilter(prev => [...prev, { id, value: selectedOption.value }]);
		} else {
			setFilter(prev =>
				prev.map(item => (item.id === id ? { id, value: selectedOption.value } : item)),
			);
		}
	};

	return (
		<div className={styles.filterItem}>
			<div className={styles.title}>{title}</div>
			<Select
				options={items}
				onChange={handleChange}
				isClearable
				unstyled
				placeholder="Оберіть продукт..."
				noOptionsMessage={() => 'Не знайдено'}
				classNames={{
					control: ({ isFocused }) => clsx(styles.control, isFocused && styles.focus),
					clearIndicator: () => clsx('hover:text-hover cursor-pointer p-2'),
					indicatorSeparator: () => clsx('bg-gray my-2'),
					dropdownIndicator: () => clsx('hover:text-hover cursor-pointer pl-2'),
					menu: () => clsx(styles.options),
					option: ({ isFocused, isSelected }) =>
						clsx(styles.option, (isFocused || isSelected) && styles.focus),
				}}
			/>
		</div>
	);
};

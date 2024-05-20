'use client';

import { uk } from 'date-fns/locale/uk';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
registerLocale('uk', uk);

import styles from './TableFilterComponents.module.scss';
import type { TableFilterComponentProps } from './TableFilterComponents.props';

export const TableFilterDate: React.FC<TableFilterComponentProps> = ({
	id,
	title,
	filter,
	min,
	max,
	setFilter,
}) => {
	const current = filter.find(i => i.id === id);

	const currentValue = (current?.value as number[]) || [];

	const handleChange = (name: string, date: Date | null) => {
		if (!date) return;

		const newDate = new Date(date);
		const formattedDate = new Date(newDate.toLocaleString('en-US', { timeZone: 'UTC' }));

		const value = [...currentValue];
		if (name === 'min' && date) {
			value[0] = formattedDate.getTime();
		} else if (name === 'max' && date) {
			value[1] = formattedDate.getTime();
		}

		if (!current) {
			setFilter(prev => [...prev, { id, value }]);
		} else {
			setFilter(prev => prev.map(item => (item.id === id ? { id, value } : item)));
		}
	};

	const dateMin = currentValue[0] ? new Date(currentValue[0]) : null;

	const dateMax = currentValue[1] ? new Date(currentValue[1]) : null;

	return (
		<div className={styles.filterItem}>
			<div className={styles.title}>{title}</div>
			<div className={styles.datePickers}>
				<div className={styles.pickerWrapper}>
					<span>від:</span>
					<DatePicker
						locale="uk"
						dateFormat="dd.MM.yyyy"
						maxDate={new Date(Date.now())}
						selected={dateMin}
						selectsStart
						startDate={dateMin}
						endDate={dateMax}
						onChange={date => {
							if (date) date.setHours(3, 0, 0, 0);
							handleChange('min', date);
						}}
						className={styles.picker}
						placeholderText="Вкажіть дату"
					/>
				</div>
				<div className={styles.pickerWrapper}>
					<span>до:</span>
					<DatePicker
						locale="uk"
						dateFormat="dd.MM.yyyy"
						maxDate={new Date(Date.now())}
						selected={dateMax}
						selectsStart
						startDate={dateMin}
						endDate={dateMax}
						onChange={date => {
							if (date) date.setHours(23, 59, 59, 999);
							handleChange('max', date);
						}}
						className={styles.picker}
						placeholderText="Вкажіть дату"
					/>
				</div>
			</div>
		</div>
	);
};

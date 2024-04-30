'use client';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import type { ChangeEvent } from 'react';

import styles from './TableFilterComponents.module.scss';
import type { TableFilterComponentProps } from './TableFilterComponents.props';

import { Input } from '@/components/UI';

export const TableFilterRange: React.FC<TableFilterComponentProps> = ({
	id,
	title,
	filter,
	min,
	max,
	setFilter,
}) => {
	const current = filter.find(i => i.id === id);

	const currentValue = (current?.value as number[]) || [];

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = parseFloat(e.target.value);
		const newValue = [...currentValue];
		if (name === 'min') {
			newValue[0] = value;
		} else if (name === 'max') {
			newValue[1] = value;
		}
		handleChange(newValue);
	};

	const handleChange = (value: number | number[]) => {
		if (!current) {
			setFilter(prev => [...prev, { id, value }]);
		} else {
			setFilter(prev => prev.map(item => (item.id === id ? { id, value } : item)));
		}
	};

	const defaultMin = currentValue[0] > 0 ? currentValue[0] : min ? min : 0;

	const defaultMax = currentValue[1] > 0 ? currentValue[1] : max ? max : currentValue[1];

	return (
		<div className={styles.filterItem}>
			<div className={styles.title}>{title}</div>
			<div className={styles.rangeInputs}>
				<div className={styles.rangeInputWrapper}>
					<span>від:</span>
					<Input
						name="min"
						type="number"
						value={currentValue[0] || ''}
						onChange={handleInputChange}
					/>
				</div>
				<div className={styles.rangeInputWrapper}>
					<span>до:</span>
					<Input
						name="max"
						type="number"
						value={currentValue[1] || ''}
						onChange={handleInputChange}
					/>
				</div>
			</div>
			<Slider
				range
				min={min}
				max={max}
				step={1}
				value={[defaultMin, defaultMax]}
				onChange={handleChange}
			/>
		</div>
	);
};

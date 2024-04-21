import type { ChangeEvent } from 'react';

import { Checkbox } from '../Checkbox/Checkbox';

import styles from './CheckboxGroup.module.scss';
import type { CheckboxGroupProps } from './CheckboxGroup.props';

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
	data,
	current,
	setCurrent,
	...props
}) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const option = e.target.value;
		if (current.includes(option)) {
			setCurrent(current.filter(item => item !== option));
		} else {
			setCurrent([...current, option]);
		}
	};

	const group = data.map(({ title, value }, index) => (
		<Checkbox
			key={index}
			checked={current.includes(value?.toString())}
			value={value.toString()}
			variant="rect"
			onChange={handleChange}
		>
			{title}
		</Checkbox>
	));

	return (
		<div className={styles.group} {...props}>
			{group}
		</div>
	);
};

import clsx from 'clsx';
import type { ChangeEvent } from 'react';

import styles from './TagsCheckbox.module.scss';
import type { TagsCheckboxProps } from './TagsCheckbox.props';

export const TagsCheckbox: React.FC<TagsCheckboxProps> = ({
	tags,
	checkedTags,
	setCheckedTags,
	...props
}) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		if (checkedTags?.includes(value)) {
			setCheckedTags(checkedTags.filter(tag => tag !== value));
		} else {
			setCheckedTags([...checkedTags, value]);
		}
	};

	const list = tags?.map((tag, index) => (
		<li key={index} className={styles.item}>
			<input
				id={tag}
				value={tag}
				checked={checkedTags?.includes(tag)}
				type="checkbox"
				className={styles.input}
				onChange={handleChange}
			/>
			<label
				htmlFor={tag}
				className={clsx(styles.label, checkedTags?.includes(tag) ? styles.checked : '')}
			>
				{tag}
			</label>
		</li>
	));

	return (
		<ul className={styles.list} {...props}>
			{tags && list}
		</ul>
	);
};

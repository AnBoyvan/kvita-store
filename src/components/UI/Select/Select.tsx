import clsx from 'clsx';
import { forwardRef, type ForwardedRef } from 'react';

import styles from './Select.module.scss';
import { SelectProps } from './Select.props';

import { Icon } from '@/components/Shared';

export const Select = forwardRef(
	(
		{ value, options, className, label, error, grid, disabled, ...props }: SelectProps,
		ref: ForwardedRef<HTMLSelectElement>,
	) => {
		const list = options.map(({ title, value }, index) => (
			<option key={index} value={value.toString()} className={styles.option}>
				{title}
			</option>
		));

		return (
			<div className={styles.wrapper} style={{ gridArea: grid }}>
				{label && <label className={styles.label}>{label}</label>}
				<div className={styles.selectWrapper}>
					<select
						ref={ref}
						className={clsx(styles.select, error && styles.error, className)}
						value={value.toString()}
						disabled={disabled}
						{...props}
					>
						{list}
					</select>
					<Icon name="ChevronDown" className={styles.icon} size={16} />
					{error && <div className={styles.errorMessage}>*{error.message}</div>}
				</div>
			</div>
		);
	},
);

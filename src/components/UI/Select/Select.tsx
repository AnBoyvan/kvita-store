import clsx from 'clsx';
import { forwardRef, type ForwardedRef } from 'react';

import styles from './Select.module.scss';
import { SelectProps } from './Select.props';

import { Icon } from '@/components/Shared';

export const Select = forwardRef(
	({ options, className, ...props }: SelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
		const list = options.map(({ title, value }, index) => (
			<option key={index} value={value.toString()} className={styles.option}>
				{title}
			</option>
		));

		return (
			<div className={styles.wrapper}>
				<select ref={ref} className={clsx(styles.select, className)} {...props}>
					{list}
				</select>
				<Icon name="ChevronDown" className={styles.icon} size={16} />
			</div>
		);
	},
);

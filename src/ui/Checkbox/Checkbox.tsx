'use client';

import { CheckboxProps } from './Checkbox.props';
import styles from './Checkbox.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

export const Checkbox: React.FC<CheckboxProps> = ({
	variant,
	children,
	...props
}) => {
	return (
		<label className={styles.label}>
			<input
				type="checkbox"
				className={clsx(
					styles.input,
					variant === 'round' ? styles.round : '',
				)}
				{...props}
			/>
			<span>{children}</span>
		</label>
	);
};

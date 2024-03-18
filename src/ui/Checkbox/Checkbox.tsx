'use client';

import { CheckboxProps } from './Checkbox.props';
import styles from './Checkbox.module.scss';
import { ForwardedRef, forwardRef } from 'react';
import clsx from 'clsx';

export const Checkbox = forwardRef(
	(
		{ variant, children, ...props }: CheckboxProps,
		ref: ForwardedRef<HTMLInputElement>,
	): JSX.Element => {
		return (
			<label className={styles.label}>
				<input
					ref={ref}
					type="checkbox"
					className={clsx(styles.input, variant === 'round' ? styles.round : '')}
					{...props}
				/>
				<span>{children}</span>
			</label>
		);
	},
);

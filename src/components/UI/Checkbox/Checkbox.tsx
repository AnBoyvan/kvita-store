import clsx from 'clsx';
import { forwardRef, type ForwardedRef } from 'react';

import styles from './Checkbox.module.scss';
import type { CheckboxProps } from './Checkbox.props';

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

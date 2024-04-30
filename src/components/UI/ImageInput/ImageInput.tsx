import clsx from 'clsx';
import { forwardRef, type ForwardedRef } from 'react';

import styles from './ImageInput.module.scss';
import type { ImageInputProps } from './ImageInput.props';

export const ImageInput = forwardRef(
	(
		{ className, multiple, ...props }: ImageInputProps,
		ref: ForwardedRef<HTMLInputElement>,
	): JSX.Element => {
		return (
			<label className={clsx(styles.label, className)}>
				<input
					id={props.name}
					ref={ref}
					type="file"
					accept="image/*"
					className={styles.input}
					multiple={multiple ? multiple : false}
					{...props}
				/>
			</label>
		);
	},
);

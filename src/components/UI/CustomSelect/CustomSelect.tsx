'use client';

import clsx from 'clsx';
import { forwardRef, useEffect, useRef, useState, type ForwardedRef } from 'react';

import styles from './CustomSelect.module.scss';
import { CustomSelectProps } from './CustomSelect.props';

import { Icon } from '@/components/Shared';

export const CustomSelect = forwardRef(
	(
		{ options, variant, className, current, ...props }: CustomSelectProps,
		ref: ForwardedRef<HTMLInputElement>,
	): JSX.Element => {
		const [open, setOpen] = useState<boolean>(false);
		const selectRef = useRef<HTMLDivElement>(null);

		const optionsList = options.map(({ title, value }) => (
			<label key={title} className={clsx(styles.label, variant && styles[variant])}>
				<input
					ref={ref}
					{...props}
					type="radio"
					value={value.toString()}
					className={styles.input}
					onClick={e => {
						e.stopPropagation();
						setOpen(false);
					}}
				/>
				{title}
			</label>
		));

		const currentOption = options.find(({ value }) => value === current);

		useEffect(() => {
			const handleClickOutside = (event: MouseEvent) => {
				if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
					setOpen(false);
				}
			};

			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, [selectRef]);
		return (
			<div
				ref={selectRef}
				className={clsx(
					styles.select,

					variant && styles[variant],
					className && className,
				)}
				onClick={() => setOpen(!open)}
			>
				<span className={styles.current}>{currentOption?.title}</span>
				<div className={clsx(styles.list, open && styles.open)}>{optionsList}</div>
				<Icon name="ChevronDown" className={clsx(styles.icon, open && styles.open)} size={16} />
			</div>
		);
	},
);

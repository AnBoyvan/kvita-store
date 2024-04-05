'use client';

import clsx from 'clsx';
import debounce from 'lodash.debounce';
import { useForm } from 'react-hook-form';

import styles from './SearchField.module.scss';
import { SearchFieldProps } from './SearchField.props';

import { Button, Icon } from '@/ui';

export const SearchField: React.FC<SearchFieldProps> = ({
	variant,
	initialValue,
	handleReset,
	submitAction,
	onChange,
	className,
	autoFocus,
	...props
}: SearchFieldProps) => {
	const { register, handleSubmit, reset } = useForm({
		mode: 'onChange',
		defaultValues: {
			search: initialValue ? initialValue : '',
		},
	});

	const onResetClick = () => {
		reset();
		if (handleReset) handleReset();
	};

	return (
		<form
			className={clsx(styles.form, className)}
			onSubmit={handleSubmit(submitAction)}
			onChange={debounce(e => onChange(e), 500)}
			{...props}
		>
			{variant === 'secondary' && (
				<Button type="submit" mode="simple" className={styles.searchBtn}>
					<Icon name="Search" />
				</Button>
			)}
			<input
				type="text"
				{...register('search')}
				className={clsx(styles.input, styles[variant])}
				placeholder="пошук..."
				autoComplete="off"
				autoFocus={autoFocus}
			/>
			{variant === 'primary' && (
				<>
					<Button type="reset" mode="simple" className={styles.resetBtn} onClick={onResetClick}>
						<Icon name="X" />
					</Button>
					<Button type="submit" mode="default" variant="primary" className={styles.submitBtn}>
						<Icon name="Search" />
					</Button>
				</>
			)}
		</form>
	);
};

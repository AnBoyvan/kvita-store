'use client';

import { useForm } from 'react-hook-form';
import styles from './Search.module.scss';
import { SearchProps } from './SearchProps';
import debounce from 'lodash.debounce';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import clsx from 'clsx';

export const Search: React.FC<SearchProps> = ({
	variant,
	initialValue,
	handleReset,
	submitAction,
	onChange,
	className,
	...props
}) => {
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

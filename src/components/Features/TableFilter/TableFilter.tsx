'use client';

import { useState } from 'react';

import styles from './TableFilter.module.scss';
import { TableFilterProps } from './TableFilter.props';
import { TableFilterMenu } from './components/TableFilterMenu';
import { TableFilterSearch } from './components/TableFilterSearch';

import { Icon } from '@/components/Shared';
import { Button } from '@/components/UI';

export const TableFilter: React.FC<TableFilterProps> = ({
	searchId,
	filter,
	setFilter,
	children,
	...props
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className={styles.filter} {...props}>
			<TableFilterSearch id={searchId} filter={filter} setFilter={setFilter} />

			<Button
				mode="default"
				variant="ghost"
				onClick={() => setIsOpen(true)}
				className={styles.filterBtn}
			>
				<span>Фільтр</span>
				<Icon name="Filter" />
			</Button>

			{isOpen && (
				<TableFilterMenu setIsOpen={setIsOpen} resetFilter={setFilter}>
					{children}
				</TableFilterMenu>
			)}
		</div>
	);
};

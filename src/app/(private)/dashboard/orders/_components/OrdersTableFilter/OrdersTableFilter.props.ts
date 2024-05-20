import type { ColumnFiltersState } from '@tanstack/react-table';
import type { Dispatch, SetStateAction } from 'react';

export interface OrdersTableFilterProps {
	filter: ColumnFiltersState;
	setFilter: Dispatch<SetStateAction<ColumnFiltersState>>;
	minTotal?: number;
	maxTotal?: number;
}

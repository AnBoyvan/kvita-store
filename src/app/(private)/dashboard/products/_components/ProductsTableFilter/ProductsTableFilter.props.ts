import type { ColumnFiltersState } from '@tanstack/react-table';
import type { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';

export interface ProductsTableFilterProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	filter: ColumnFiltersState;
	setFilter: Dispatch<SetStateAction<ColumnFiltersState>>;
}

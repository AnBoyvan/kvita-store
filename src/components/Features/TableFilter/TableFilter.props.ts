import type { ColumnFiltersState } from '@tanstack/react-table';
import type { DetailedHTMLProps, Dispatch, HTMLAttributes, ReactNode, SetStateAction } from 'react';
export interface TableFilterProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	searchId: string;
	filter: ColumnFiltersState;
	setFilter: Dispatch<SetStateAction<ColumnFiltersState>>;
}

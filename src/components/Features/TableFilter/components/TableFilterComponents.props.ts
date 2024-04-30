import type { ColumnFiltersState } from '@tanstack/react-table';
import type { DetailedHTMLProps, Dispatch, HTMLAttributes, ReactNode, SetStateAction } from 'react';

import type { IConfig } from '@/interfaces';

export interface TableFilterComponentProps {
	id: string;
	title?: string;
	data?: IConfig[];
	min?: number;
	max?: number;
	filter: ColumnFiltersState;
	setFilter: Dispatch<SetStateAction<ColumnFiltersState>>;
}

export interface TableFilterMenuProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	resetFilter: Dispatch<SetStateAction<ColumnFiltersState>>;
}

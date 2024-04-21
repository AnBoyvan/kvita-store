import type { FilterFn } from '@tanstack/react-table';

export const valuesIncludes: FilterFn<any> = (row, columnId: string, filterValue: string[]) => {
	if (filterValue.length === 0) return true;

	return Boolean(filterValue.includes(row.getValue(columnId)));
};

export const isSelected: FilterFn<any> = (row, columnId: string, filterValue: string) => {
	if (filterValue === 'all') return true;

	return Boolean(filterValue === row.getValue<boolean | string>(columnId).toString());
};

export const isPositive: FilterFn<any> = (row, columnId: string, filterValue: string) => {
	const value = row.getValue<number | undefined>(columnId);

	if (filterValue === 'all') {
		return true;
	} else if (filterValue === 'true') {
		return Boolean(value && value > 0);
	} else {
		return Boolean(!value || value === 0);
	}
};

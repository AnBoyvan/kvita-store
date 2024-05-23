import type { FilterFn } from '@tanstack/react-table';

import { ICartItem } from '@/interfaces';

export const itemsIncludes: FilterFn<any> = (row, columnId: string, filterValue: string) => {
	if (filterValue.length === 0) return true;

	const items = row.getValue<ICartItem[]>(columnId);
	const products = items.map(i => i.productId);

	return Boolean(products.includes(filterValue));
};

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

export const inPriceRange: FilterFn<any> = (
	row,
	columnId: string,
	filterValue: [number, number],
) => {
	const [min, max] = filterValue;

	if (isNaN(min) || isNaN(max)) {
		return true;
	}

	const price = row.getValue<number | undefined>(columnId);

	const promoPrice = row.original.promoPrice;

	if (typeof price !== 'number' && typeof promoPrice !== 'number') {
		return false;
	}

	return Boolean(
		(price && price >= min && price <= max) ||
			Boolean(promoPrice && promoPrice >= min && promoPrice <= max),
	);
};

export const inDateRange: FilterFn<any> = (
	row,
	columnId: string,
	filterValue: [number, number],
) => {
	const [min, max] = filterValue;

	if (isNaN(min) || isNaN(max)) {
		return true;
	}

	const date = new Date(row.getValue<Date>(columnId));
	const time = date.getTime();

	if (isNaN(time)) return false;

	return Boolean(time && time >= min && time <= max);
};

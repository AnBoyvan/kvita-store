import { PaginationState, Row } from '@tanstack/react-table';

export const tablePagination = (pagination: PaginationState, rows: Row<any>[]) => {
	const { pageIndex, pageSize } = pagination;

	const modifier = pageIndex * pageSize;
	const firstOnPage = 1 + modifier;
	const lastOnPage = Number(rows.length) + modifier;

	return { firstOnPage, lastOnPage };
};

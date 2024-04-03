'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';
import { PaginationProps } from './Pagination.props';

import { useQueryString } from '@/hooks/useQueryString';
import { Icon } from '@/ui/Icon/Icon';

export const Pagination: React.FC<PaginationProps> = ({ count, perPage }: PaginationProps) => {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const { createQueryString } = useQueryString();

	const onPageChange = ({ selected }: { selected: number }) => {
		const newPage = selected + 1;
		const queryString = createQueryString('page', newPage.toString());
		router.push(pathname + '?' + queryString);
	};

	const pageCount = Math.ceil(count / perPage);

	const checkPage = () => {
		const currentPage = Number(searchParams.get('page'));
		if (currentPage && currentPage > 1) {
			return currentPage - 1;
		}
		return 0;
	};

	return (
		<>
			<ReactPaginate
				pageCount={pageCount}
				previousLabel={<Icon name="ChevronLeft" size={16} />}
				nextLabel={<Icon name="ChevronRight" size={16} />}
				onPageChange={onPageChange}
				forcePage={checkPage()}
				renderOnZeroPageCount={null}
				marginPagesDisplayed={0}
				pageRangeDisplayed={5}
				breakLabel={null}
				containerClassName={styles.pagination}
				pageLinkClassName={styles.page}
				previousLinkClassName={styles.page}
				nextLinkClassName={styles.page}
				activeLinkClassName={styles.active}
				disabledLinkClassName={styles.disabled}
			/>
		</>
	);
};

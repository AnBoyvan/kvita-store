'use client';

import { useQuery } from '@tanstack/react-query';

import { Review } from '..';

import styles from './ReviewsList.module.scss';
import type { ReviewsListProps } from './ReviewsList.props';

import { reviewService } from '@/services/kvita-api';

export const ReviewsList: React.FC<ReviewsListProps> = ({ productId, ...props }) => {
	const { data } = useQuery({
		queryKey: ['reviews', productId],
		queryFn: () => reviewService.find(`productId=${productId}`),
	});

	return (
		<ul className={styles.list} {...props}>
			{data && data?.length > 0 ? (
				<>
					{data.map(review => (
						<Review key={review._id} review={review} />
					))}
				</>
			) : (
				<span>Ще немає відгуків...</span>
			)}
		</ul>
	);
};

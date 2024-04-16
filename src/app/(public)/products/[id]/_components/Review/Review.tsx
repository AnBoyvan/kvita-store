import { ReviewEdit, ReviewRemove } from '..';

import styles from './Review.module.scss';
import type { ReviewProps } from './Review.props';

import { useUserStore } from '@/store';
import { isSuperuser } from '@/utils/helpers';

export const Review: React.FC<ReviewProps> = ({ review, ...props }) => {
	const { _id, ownerName, ownerId, comment, date, productId } = review;
	const { user } = useUserStore();

	const isOwner = ownerId === user._id;

	return (
		<li className={styles.review} {...props}>
			<div className={styles.header}>
				<b>{ownerName}</b>
				<div className={styles.wrapper}>
					<span>{date}</span>
					{isOwner && <ReviewEdit productId={productId} review={review} />}
					{(isOwner || isSuperuser(user.role)) && <ReviewRemove reviewId={_id} />}
				</div>
			</div>
			<p className={styles.comment}>{comment}</p>
		</li>
	);
};

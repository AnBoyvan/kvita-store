'use client';

import { useContext } from 'react';

import { ReviewForm } from '..';

import styles from './Review.module.scss';
import { ReviewProps } from './Review.props';

import { ModalContext } from '@/hooks';
import { useUserStore } from '@/store';
import { Button, CloseModalButton, Icon } from '@/ui';
import { isSuperuser } from '@/utils/helpers';

export const Review: React.FC<ReviewProps> = ({ review, ...props }) => {
	const { _id, ownerName, ownerId, comment, date, productId } = review;
	const { user } = useUserStore();
	const { closeModal, openModal } = useContext(ModalContext);

	const isOwner = ownerId === user._id;

	const editReview = () => {
		openModal(
			<>
				<ReviewForm
					productId={productId}
					title="Змінити відгук"
					button="Готово"
					update={closeModal}
					review={review}
					className={styles.editForm}
				/>
				<CloseModalButton />
			</>,
		);
	};

	const removeReview = () => {
		console.log(_id);
	};

	const onRemove = () => {
		// openModal(<Accept message="Видалити відгук?" onAccept={removeReview} />);
	};

	return (
		<li className={styles.review} {...props}>
			<div className={styles.header}>
				<b>{ownerName}</b>
				<div className={styles.wrapper}>
					<span>{date}</span>
					{isOwner && (
						<Button mode="simple" className="text-success" onClick={editReview}>
							<Icon name="PencilLine" />
						</Button>
					)}
					{(isOwner || isSuperuser(user.role)) && (
						<Button mode="simple" className="text-error" onClick={() => onRemove()}>
							<Icon name="Trash" />
						</Button>
					)}
				</div>
			</div>
			<p className={styles.comment}>{comment}</p>
		</li>
	);
};

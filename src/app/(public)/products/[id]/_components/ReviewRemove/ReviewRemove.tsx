'use client';

import type { ReviewRemoveProps } from './ReviewRemove.props';

import { Modal } from '@/components/Features';
import { Accept, Icon } from '@/components/Shared';
import { Button } from '@/components/UI';
import { useModal, useMutateReviews } from '@/hooks';

export const ReviewRemove: React.FC<ReviewRemoveProps> = ({ reviewId, ...props }) => {
	const { removeReview } = useMutateReviews();
	const { modalRef, openModal, closeModal } = useModal();

	const deleteReview = () => {
		removeReview(reviewId);
	};

	const onRemove = () => {
		openModal();
	};

	return (
		<div {...props}>
			<Button mode="simple" className="text-error" onClick={() => onRemove()}>
				<Icon name="Trash" />
			</Button>
			<Modal container ref={modalRef}>
				<Accept message="Видалити відгук?" onAccept={deleteReview} onCancel={closeModal} />
			</Modal>
		</div>
	);
};

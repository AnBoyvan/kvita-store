'use client';

import { ReviewForm } from '../ReviewForm/ReviewForm';

import styles from './ReviewEdit.module.scss';
import type { ReviewEditProps } from './ReviewEdit.props';

import { Modal } from '@/components/Features';
import { Icon } from '@/components/Shared';
import { Button } from '@/components/UI';
import { useModal } from '@/hooks';

export const ReviewEdit: React.FC<ReviewEditProps> = ({ review, productId, ...props }) => {
	const { modalRef, openModal, closeModal } = useModal();

	const onEdit = () => {
		openModal();
	};

	return (
		<div {...props}>
			<Button mode="simple" className={styles.button} onClick={onEdit}>
				<Icon name="PencilLine" />
			</Button>
			<Modal container button ref={modalRef}>
				<ReviewForm
					productId={productId}
					title="Змінити відгук"
					button="Готово"
					update={closeModal}
					review={review}
					className={styles.editForm}
				/>
			</Modal>
		</div>
	);
};

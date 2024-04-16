'use client';

import clsx from 'clsx';
import { useForm, type SubmitHandler } from 'react-hook-form';

import styles from './ReviewForm.module.scss';
import type { ReviewFormProps } from './ReviewForm.props';

import { Htag } from '@/components/Shared';
import { Button } from '@/components/UI';
import { useMutateReviews } from '@/hooks';
import type { IReviewCreate } from '@/interfaces';
import { useUserStore } from '@/store';

export const ReviewForm: React.FC<ReviewFormProps> = ({
	review,
	title,
	button,
	update,
	productId,
	className,
	...props
}) => {
	const { user } = useUserStore();
	const { addReview, updateReview } = useMutateReviews();

	const { register, handleSubmit, watch, reset } = useForm<IReviewCreate>({
		defaultValues: {
			productId: productId,
			comment: review?.comment || '',
		},
	});

	const onSubmit: SubmitHandler<IReviewCreate> = data => {
		if (update && review) {
			const updated = { _id: review._id, comment: data.comment };
			updateReview(updated);
			update();
			reset();
			return;
		}

		addReview(data);
		reset();
	};

	return (
		<form className={clsx(styles.form, className)} {...props} onSubmit={handleSubmit(onSubmit)}>
			<Htag tag="h3">{title}</Htag>
			<textarea
				{...register('comment', { required: true })}
				value={watch('comment')}
				rows={8}
				placeholder="Залиште свій відгук про цей товар..."
				className={styles.comment}
			/>
			<Button
				type="submit"
				mode="default"
				variant="primary"
				disabled={Boolean(!user.isLoggedIn)}
				title={user.isLoggedIn ? undefined : 'Тільки для зареєстрованих користувачів'}
				className="self-center"
			>
				{button}
			</Button>
		</form>
	);
};

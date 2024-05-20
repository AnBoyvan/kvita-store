import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import type { IReview, IReviewCreate, IReviewUpdate } from '@/interfaces';
import { reviewService } from '@/services/kvita-api';
import { errorCatch } from '@/utils/helpers';

export const useMutateReviews = () => {
	const queryClient = useQueryClient();

	const { mutate: addReview } = useMutation({
		mutationFn: (data: IReviewCreate) => reviewService.create(data),
		mutationKey: ['reviews-create'],
		onSuccess: (review: IReview) => {
			queryClient.invalidateQueries({ queryKey: ['reviews'] });
			toast.success('Дякуємо Вам за відгук!');
		},
		onError: err => {
			toast.error(errorCatch(err), { closeButton: false });
		},
	});

	const { mutate: updateReview } = useMutation({
		mutationFn: ({ _id, comment }: IReviewUpdate) => reviewService.update(_id, comment),
		mutationKey: ['reviews-update'],
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['reviews'] });
			toast.success('Відгук змінено');
		},
		onError: err => {
			toast.error(errorCatch(err), { closeButton: false });
		},
	});

	const { mutate: removeReview } = useMutation({
		mutationFn: (id: string) => reviewService.remove(id),
		mutationKey: ['reviews-remove'],
		onSuccess: ({ message }) => {
			queryClient.invalidateQueries({ queryKey: ['reviews'] });
			toast.success(message);
		},
		onError: err => {
			toast.error(errorCatch(err), { closeButton: false });
		},
	});

	return { addReview, updateReview, removeReview };
};

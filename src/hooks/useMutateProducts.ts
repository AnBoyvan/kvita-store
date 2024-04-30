import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import type { IProductCreate, IProductUpdate } from '@/interfaces';
import { productService } from '@/services/kvita-api';
import { useUserStore } from '@/store';

export const useMutateProducts = () => {
	const queryClient = useQueryClient();
	const { updateFavorite } = useUserStore();

	const {
		mutate: create,
		isSuccess: createSuccess,
		isPending: creating,
	} = useMutation({
		mutationFn: (data: IProductCreate) => productService.create(data),
		mutationKey: ['products-create'],
		onSuccess: product => {
			queryClient.invalidateQueries({ queryKey: ['products'] });
			toast.success(`${product.name} створено`, { closeButton: false });
		},
		onError: err => toast.error(err.message, { closeButton: false }),
	});

	const {
		mutate: update,
		isSuccess: updateSuccess,
		isPending: updating,
	} = useMutation({
		mutationFn: ({ id, data }: { id: string; data: IProductUpdate }) =>
			productService.update(id, data),
		mutationKey: ['products-update'],
		onSuccess: product => {
			queryClient.invalidateQueries({ queryKey: ['products'] });
			toast.success(`${product.name} змінено`, { closeButton: false });
		},
		onError: err => toast.error(err.message, { closeButton: false }),
	});

	const { mutate: updFavorites } = useMutation({
		mutationFn: (productId: string) => productService.updateFavorite(productId),
		mutationKey: ['products-favorite'],
		onSuccess: ({ message, userFavorites }) => {
			updateFavorite(userFavorites);
			toast.success(message, { closeButton: false });
		},
		onError: err => toast.error(err.message, { closeButton: false }),
	});

	return { create, creating, createSuccess, update, updating, updateSuccess, updFavorites };
};

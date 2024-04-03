import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { productService } from '@/services/kvita-api';
import { useUserStore } from '@/store';

export const useMutateProducts = () => {
	const { updateFavorite } = useUserStore();

	const { mutate: updFavorites } = useMutation({
		mutationFn: (productId: string) => productService.updateFavorite(productId),
		mutationKey: ['products-favorite'],
		onSuccess: ({ message, userFavorites }) => {
			updateFavorite(userFavorites);
			toast.success(message, { closeButton: false });
		},
		onError: err => toast.error(err.message, { closeButton: false }),
	});

	return { updFavorites };
};

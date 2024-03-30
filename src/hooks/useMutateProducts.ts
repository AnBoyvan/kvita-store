import { useMutation } from '@tanstack/react-query';
import { productService } from '@/services/product.service';
import { toast } from 'sonner';
import { useUserStore } from '@/store/user.store';

export const useMutateProducts = () => {
	const { updateFavorite } = useUserStore();

	const { mutate: updFavorites } = useMutation({
		mutationFn: (productId: string) => productService.updateFavorite(productId),
		mutationKey: ['favorite'],
		onSuccess: ({ message, userFavorites }) => {
			updateFavorite(userFavorites);
			toast.success(message, { closeButton: false });
		},
		onError: err => toast.error(err.message, { closeButton: false }),
	});

	return { updFavorites };
};

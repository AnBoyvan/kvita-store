import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAxiosAuth } from './useAuthAxios';
import { productService } from '@/services/product.service';
import { toast } from 'sonner';

export const useMutateProducts = () => {
	const client = useQueryClient();

	const axiosAuth = useAxiosAuth();

	const { mutate: updFavorites } = useMutation({
		mutationFn: (productId: string) => productService.updateFavorite(productId, axiosAuth),
		onSuccess: ({ message }) => {
			toast.success(message, { closeButton: false });
			client.invalidateQueries({ queryKey: ['products'] });
		},
		onError: err => toast.error(err.message, { closeButton: false }),
	});

	return { updFavorites };
};

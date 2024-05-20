import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { useCart } from '@/hooks';
import type { IOrderCreate, IOrderUpdate } from '@/interfaces';
import { orderService } from '@/services/kvita-api';
import { errorCatch } from '@/utils/helpers';

export const useMutateOrders = () => {
	const queryClient = useQueryClient();
	const { clearCart } = useCart();

	const {
		mutate: create,
		isSuccess: createSuccess,
		isPending: creating,
		isError: createError,
	} = useMutation({
		mutationFn: (data: IOrderCreate) => orderService.create(data),
		mutationKey: ['orders-create'],
		onSuccess: order => {
			clearCart();
			queryClient.invalidateQueries({ queryKey: ['orders'] });
			toast.success('Замовлення відправлено', { closeButton: false });
		},
		onError: err => {
			toast.error(errorCatch(err), { closeButton: false });
		},
	});

	const {
		mutate: update,
		isSuccess: updateSuccess,
		isPending: updating,
		isError: updateError,
	} = useMutation({
		mutationFn: ({ id, data }: { id: string; data: IOrderUpdate }) => orderService.update(id, data),
		mutationKey: ['orders-update'],
		onSuccess: order => {
			queryClient.invalidateQueries({ queryKey: ['orders'] });
			toast.success(`Замовлення ${order.publicId} змінено`, { closeButton: false });
		},
		onError: err => {
			toast.error(errorCatch(err), { closeButton: false });
		},
	});

	return {
		create,
		createSuccess,
		creating,
		createError,
		update,
		updateSuccess,
		updating,
		updateError,
	};
};

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import type { IPicture, IPictureCreate } from '@/interfaces';
import { pictureService } from '@/services/kvita-api';

export const useMutatePictures = () => {
	const queryClient = useQueryClient();

	const {
		mutate: create,
		isSuccess: createSuccess,
		isPending: creating,
	} = useMutation({
		mutationFn: (data: IPictureCreate) => pictureService.create(data),
		mutationKey: ['pictures-create'],
		onSuccess: picture => {
			queryClient.invalidateQueries({ queryKey: ['pictures'] });
			toast.success(`Фото додано до галереї`, { closeButton: false });
		},
		onError: err => toast.error(err.message, { closeButton: false }),
	});

	const {
		mutate: update,
		isSuccess: updateSuccess,
		isPending: updating,
	} = useMutation({
		mutationFn: ({ id, data }: { id: string; data: IPicture }) => pictureService.update(id, data),
		mutationKey: ['pictures-update'],
		onSuccess: picture => {
			queryClient.invalidateQueries({ queryKey: ['pictures'] });
			toast.success(`Деталі фото змінено`, { closeButton: false });
		},
		onError: err => toast.error(err.message, { closeButton: false }),
	});

	return { create, creating, createSuccess, update, updating, updateSuccess };
};

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import type { IPicture, IPictureCreate } from '@/interfaces';
import { pictureService } from '@/services/kvita-api';
import { errorCatch } from '@/utils/helpers';

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
		onError: err => {
			toast.error(errorCatch(err), { closeButton: false });
		},
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
		onError: err => {
			toast.error(errorCatch(err), { closeButton: false });
		},
	});

	const {
		mutate: remove,
		isSuccess: removeSuccess,
		isPending: removing,
	} = useMutation({
		mutationFn: (id: string) => pictureService.remove(id),
		mutationKey: ['pictures-remove'],
		onSuccess: picture => {
			queryClient.invalidateQueries({ queryKey: ['pictures'] });
			toast.success(`Фото видалено`, { closeButton: false });
		},
		onError: err => {
			toast.error(errorCatch(err), { closeButton: false });
		},
	});

	return {
		create,
		creating,
		createSuccess,
		update,
		updating,
		updateSuccess,
		remove,
		removeSuccess,
		removing,
	};
};

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import type { ITagsUpdate, Tags } from '@/interfaces';
import { adminService } from '@/services/kvita-api';

export const useMutateTags = () => {
	const queryClient = useQueryClient();

	const {
		mutate: addTag,
		isSuccess: isAdded,
		isPending: isAdding,
	} = useMutation({
		mutationFn: (data: ITagsUpdate) => adminService.addTags(data),
		mutationKey: ['tags-add'],
		onSuccess: (tags: Tags) => {
			queryClient.invalidateQueries({ queryKey: ['tags'] });
			toast.success('Тег додано');
		},
		onError: err => toast.error(err.message, { closeButton: false }),
	});

	const {
		mutate: removeTag,
		isSuccess: isRemoving,
		isPending: isRemoved,
	} = useMutation({
		mutationFn: (data: ITagsUpdate) => adminService.removeTags(data),
		mutationKey: ['tags-remove'],
		onSuccess: (tags: Tags) => {
			queryClient.invalidateQueries({ queryKey: ['tags'] });
			toast.success('Тег видалено');
		},
		onError: err => toast.error(err.message, { closeButton: false }),
	});

	return { addTag, isAdding, isAdded, removeTag, isRemoving, isRemoved };
};

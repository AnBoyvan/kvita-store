import { toast } from 'sonner';

import { Accept } from '@/ui';

export const useToasts = () => {
	const acception = (onAccept: () => void, message: string) =>
		toast.custom(
			t => (
				<Accept
					message={message}
					onAccept={() => {
						onAccept();
						toast.dismiss();
					}}
					onCancel={() => toast.dismiss()}
				/>
			),
			{
				duration: 5000,
				unstyled: true,
				position: 'top-center',
			},
		);

	return { acception };
};

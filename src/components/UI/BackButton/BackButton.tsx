'use client';

import { useRouter } from 'next/navigation';

import { Icon } from '@/components/Shared';
import { Button } from '@/components/UI';

export const BackButton = () => {
	const router = useRouter();

	const handleBack = () => {
		router.back();
	};

	return (
		<Button mode="default" variant="primary" onClick={handleBack}>
			<Icon name="ChevronsLeft" />
			<span>Назад</span>
		</Button>
	);
};

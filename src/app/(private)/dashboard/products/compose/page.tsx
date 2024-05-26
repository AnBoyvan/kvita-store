import { Metadata } from 'next';

import { ProductCompose } from '@/components/Features';
import { Htag } from '@/components/Shared';

export const metadata: Metadata = {
	title: 'Нова позиція',
	robots: { index: false, follow: false },
};

export default function ComposeDashboardPage() {
	return (
		<>
			<Htag tag="h1">Нова позиція</Htag>
			<ProductCompose isNew={true} />
		</>
	);
}

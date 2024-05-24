import { ProductCompose } from '@/components/Features';
import { Htag } from '@/components/Shared';

export default function ComposeDashboardPage() {
	return (
		<>
			<Htag tag="h1">Нова позиція</Htag>
			<ProductCompose isNew={true} />
		</>
	);
}

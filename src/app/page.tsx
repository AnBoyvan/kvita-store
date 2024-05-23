import { Suspense } from 'react';

import { CategorySection, Hero, OrderingSection } from './_components';

import { Spinner } from '@/components/Shared';
import { Category } from '@/interfaces';
import { productService } from '@/services/kvita-api';

export default async function HomePage() {
	const products = await productService.forMain();
	return (
		<Suspense fallback={<Spinner />}>
			<main>
				<Hero />
				<div className="mx-auto  px-4 md:px-6 lg:px-8 py-16 md:py-[72px] lg:py-24 flex flex-col  gap-16 md:gap-[72px]  lg:gap-24 max-w-[1600px] min-h-screen">
					<CategorySection
						products={products.classic}
						title="Класичні торти"
						category={Category.Classic}
					/>
					<CategorySection
						products={products.cheesecake}
						title="Чізкейки"
						category={Category.Cheesecake}
					/>
					<CategorySection
						products={products.dessert}
						title="Десерти"
						category={Category.Dessert}
					/>
					<CategorySection products={products.set} title="Набори" category={Category.Set} />
				</div>
				<OrderingSection />
			</main>
		</Suspense>
	);
}

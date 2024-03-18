import { CategorySection } from '@/modules/Home/CategorySection/CategorySection';
import { Hero } from '@/modules/Home/Hero/Hero';
import { Category } from '@/interfaces/product.interface';
import { OrderingSection } from '@/modules/Home/OrderingSection/OrderingSection';
import { productService } from '@/services/product.service';

export default async function Home() {
	const products = await productService.forMain();
	return (
		<main>
			<Hero />
			<div className="mx-auto  px-4 md:px-6 lg:px-8 py-16 md:py-[72px] lg:py-24 flex flex-col  gap-16 md:gap-[72px]  lg:gap-24 max-w-7xl min-h-screen">
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
				<CategorySection products={products.dessert} title="Десерти" category={Category.Dessert} />
				<CategorySection products={products.set} title="Набори" category={Category.Set} />
			</div>
			<OrderingSection />
		</main>
	);
}

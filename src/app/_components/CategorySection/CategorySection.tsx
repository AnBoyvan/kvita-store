import styles from './CategorySection.module.scss';
import type { CategorySectionProps } from './CategorySection.props';

import { Motion } from '@/components/Features';
import { Icon, ProductCard } from '@/components/Shared';
import { LinkButton } from '@/components/UI';
import { PAGES } from '@/configs';

export const CategorySection: React.FC<CategorySectionProps> = ({
	title,
	products,
	category,
	...props
}: CategorySectionProps) => {
	return (
		<Motion initial="hidden" whileInView="default" viewport={{ amount: 0.2, once: true }}>
			<section className={styles.section} {...props}>
				<h2 className={styles.title}>{title}</h2>
				<ul className={styles.list}>
					{products.map((product, index) => (
						<ProductCard order={index + 1} key={product._id} product={product} />
					))}
				</ul>
				<LinkButton
					link={`${PAGES.PRODUCTS}?category=${category}`}
					mode="default"
					variant="ghost"
					className={styles.button}
				>
					<span>Більше</span>
					<Icon name="ChevronsRight" />
				</LinkButton>
			</section>
		</Motion>
	);
};

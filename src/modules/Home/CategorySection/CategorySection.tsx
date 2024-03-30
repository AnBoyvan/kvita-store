'use client';

import { LinkButton } from '@/ui/LinkButton/LinkButton';
import styles from './CategorySection.module.scss';
import { CategorySectionProps } from './CategorySection.props';
import { Icon } from '@/ui/Icon/Icon';
import { ProductCard } from '@/components/ProductCard/ProductCard';
import { PAGES } from '@/configs/pages-url.config';
import { Motion } from '@/components/Motion/Motion';
import { motion } from 'framer-motion';

export const CategorySection: React.FC<CategorySectionProps> = ({
	title,
	products,
	category,
	...props
}: CategorySectionProps) => {
	const list = products.map((product, index) => (
		<ProductCard order={index + 1} key={product._id} product={product} />
	));

	return (
		<Motion
			initial="hidden"
			whileInView="default"
			viewport={{ amount: 0.2, once: true }}
		>
			<section className={styles.section} {...props}>
				<h2 className={styles.title}>{title}</h2>
				<ul className={styles.list}>{list}</ul>
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

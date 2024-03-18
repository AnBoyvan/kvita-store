import { LinkButton } from '@/ui/LinkButton/LinkButton';
import styles from './CategorySection.module.scss';
import { CategorySectionProps } from './CategorySection.props';
import { Icon } from '@/ui/Icon/Icon';
import { ProductCard } from '@/components/ProductCard/ProductCard';
import { PAGES } from '@/configs/pages-url.config';

export const CategorySection: React.FC<CategorySectionProps> = ({
	title,
	products,
	category,
	...props
}: CategorySectionProps) => {
	const list = products.map(i => <ProductCard key={i._id} product={i} />);

	return (
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
	);
};

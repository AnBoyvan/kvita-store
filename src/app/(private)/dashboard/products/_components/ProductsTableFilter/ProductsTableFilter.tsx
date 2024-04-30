import styles from './ProductsTableFilter.module.scss';
import type { ProductsTableFilterProps } from './ProductsTableFilter.props';

import {
	TableFilter,
	TableFilterGroup,
	TableFilterRange,
	TableFilterSelect,
} from '@/components/Features';
import { Icon } from '@/components/Shared';
import { LinkButton } from '@/components/UI';
import { CATEGORIES, PAGES, SELECT } from '@/configs';

export const ProductsTableFilter: React.FC<ProductsTableFilterProps> = ({
	filter,
	setFilter,
	minPrice,
	maxPrice,
}) => {
	return (
		<div className={styles.filter}>
			<LinkButton
				mode="default"
				variant="primary"
				link={PAGES.DASHBOARD_COMPOSE}
				className={styles.create}
			>
				<span>Створити</span>
				<Icon name="Plus" />
			</LinkButton>
			<TableFilter searchId="name" filter={filter} setFilter={setFilter}>
				<TableFilterGroup
					title="Категорія:"
					id="category"
					data={CATEGORIES}
					filter={filter}
					setFilter={setFilter}
				/>
				<TableFilterSelect
					id="isActive"
					title="Статус:"
					data={SELECT.isActive}
					filter={filter}
					setFilter={setFilter}
				/>
				<TableFilterSelect
					id="isNewProduct"
					title="Новинки:"
					data={SELECT.isNew}
					filter={filter}
					setFilter={setFilter}
				/>
				<TableFilterSelect
					id="promo"
					title="Знижка:"
					data={SELECT.isPromo}
					filter={filter}
					setFilter={setFilter}
				/>
				<TableFilterRange
					id="price"
					title="Ціна:"
					filter={filter}
					setFilter={setFilter}
					min={minPrice}
					max={maxPrice}
				/>
			</TableFilter>
		</div>
	);
};

import { isActive, isNew, isPromo } from '../products-table-filters';

import styles from './ProductsTableFilter.module.scss';
import type { ProductsTableFilterProps } from './ProductsTableFilter.props';

import { TableFilter, TableFilterGroup } from '@/components/Features';
import { TableFilterSelect } from '@/components/Features/TableFilter/components/TableFilterSelect';
import { CATEGORIES } from '@/configs';

export const ProductsTableFilter: React.FC<ProductsTableFilterProps> = ({
	filter,
	setFilter,
	...props
}) => {
	return (
		<div className={styles.filter} {...props}>
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
					data={isActive}
					filter={filter}
					setFilter={setFilter}
				/>
				<TableFilterSelect
					id="isNewProduct"
					title="Новинки:"
					data={isNew}
					filter={filter}
					setFilter={setFilter}
				/>
				<TableFilterSelect
					id="promo"
					title="Знижка:"
					data={isPromo}
					filter={filter}
					setFilter={setFilter}
				/>
			</TableFilter>
		</div>
	);
};

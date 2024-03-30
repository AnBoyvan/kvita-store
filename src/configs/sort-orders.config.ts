export enum SortFieldsEnum {
	Name = 'name',
	Price = 'price',
	Promo = 'promo',
	Total = 'total',
	Discount = 'discount',
	DiscountSum = 'discountSum',
	Created = 'createdAt',
	Updated = 'updatedAt',
}

export enum SortOrderEnum {
	Asc = 'asc',
	Desc = 'desc',
}

export const sortOrders = (value: string): { field: string; order: string } => {
	switch (value) {
		case 'name-asc':
			return { field: SortFieldsEnum.Name, order: SortOrderEnum.Asc };

		case 'name-desc':
			return { field: SortFieldsEnum.Name, order: SortOrderEnum.Desc };

		case 'price-asc':
			return { field: SortFieldsEnum.Price, order: SortOrderEnum.Asc };

		case 'price-desc':
			return { field: SortFieldsEnum.Price, order: SortOrderEnum.Desc };

		case 'promo-asc':
			return { field: SortFieldsEnum.Promo, order: SortOrderEnum.Asc };

		case 'promo-desc':
			return { field: SortFieldsEnum.Promo, order: SortOrderEnum.Desc };

		case 'discount-asc':
			return { field: SortFieldsEnum.Discount, order: SortOrderEnum.Asc };

		case 'discount-desc':
			return { field: SortFieldsEnum.Discount, order: SortOrderEnum.Desc };

		case 'discountSum-asc':
			return { field: SortFieldsEnum.DiscountSum, order: SortOrderEnum.Asc };

		case 'discountSum-desc':
			return { field: SortFieldsEnum.DiscountSum, order: SortOrderEnum.Desc };

		case 'total-asc':
			return { field: SortFieldsEnum.Total, order: SortOrderEnum.Asc };

		case 'total-desc':
			return { field: SortFieldsEnum.Total, order: SortOrderEnum.Desc };

		case 'createdAt-asc':
			return { field: SortFieldsEnum.Created, order: SortOrderEnum.Asc };

		case 'createdAt-desc':
			return { field: SortFieldsEnum.Created, order: SortOrderEnum.Desc };

		case 'updatedAt-asc':
			return { field: SortFieldsEnum.Updated, order: SortOrderEnum.Desc };

		case 'updatedAt-desc':
			return { field: SortFieldsEnum.Updated, order: SortOrderEnum.Desc };

		default:
			return { field: '', order: '' };
	}
};

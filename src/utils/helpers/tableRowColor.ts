import type { IData, IDataType } from '@/components/Features/TableComponents/Table/Table.props';

export const tableRowColor = (dataType: IDataType, data: IData): string => {
	if (dataType === 'products') {
		const { isNewProduct, promo, isActive } = data;

		if (!isActive) return 'gray';

		if (promo && promo > 0) return 'blue';

		if (isNewProduct) return 'green';
	}

	return '';
};

import { isManager } from './roleAccess';

import type { IData, IDataType } from '@/components/Features/TableComponents/Table/Table.props';
import { Status } from '@/interfaces';

export const tableRowColor = (dataType: IDataType, data: IData): string => {
	if (dataType === 'products') {
		const { isNewProduct, promo, isActive } = data;

		if (!isActive) return 'gray';

		if (promo && promo > 0) return 'blue';

		if (isNewProduct) return 'green';
	}

	if (dataType === 'users') {
		const { discount, role } = data;

		if (discount && discount > 0) return 'green';

		if (isManager(role)) return 'blue';
	}

	if (dataType === 'orders') {
		const { status } = data;

		if (status === Status.New) return 'blue';

		if (status === Status.Active) return 'green';

		if (status === Status.Rejected) return 'red';

		if (status === Status.Canceled) return 'gray';
	}

	return '';
};

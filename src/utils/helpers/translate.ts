import { CATEGORIES, ROLES, STATUSES } from '@/configs';

export const translate = (value: string) => {
	const configs = [...ROLES, ...STATUSES, ...CATEGORIES];

	const item = configs.find(item => item.value === value);

	return item ? item.title : '';
};

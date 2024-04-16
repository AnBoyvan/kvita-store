import type { IConfig } from '@/interfaces';

export const STATUSES: IConfig[] = [
	{
		value: 'new',
		title: 'Нове',
	},
	{
		value: 'active',
		title: 'Активне',
	},
	{
		value: 'completed',
		title: 'Виконане',
	},
	{
		value: 'canceled',
		title: 'Скасоване',
	},
	{
		value: 'rejected',
		title: 'Відхилене',
	},
];

import type { IConfig } from '@/interfaces';

export const ROLES: IConfig[] = [
	{
		value: 'customer',
		title: 'Клієнт',
	},
	{
		value: 'partner',
		title: 'Партнер',
	},
	{
		value: 'manager',
		title: 'Менеджер',
	},
	{
		value: 'admin',
		title: 'Адміністратор',
	},
	{
		value: 'superuser',
		title: 'SuperUser',
	},
	{
		value: 'banned',
		title: 'Забанений',
	},
	{
		value: 'blocked',
		title: 'Заблокований',
	},
];

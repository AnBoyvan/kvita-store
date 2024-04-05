import { PAGES } from './pages-url.config';

import { ISidebarPage } from '@/interfaces';

export const CABINET: ISidebarPage[] = [
	{
		page: `${PAGES.CABINET_INFO}`,
		title: 'Кабінет',
		icon: 'User',
	},
	{
		page: `${PAGES.CABINET_FAVORITES}`,
		title: 'Улюблені',
		icon: 'Heart',
	},
	{
		page: `${PAGES.CABINET_ORDERS}`,
		title: `Мої замовлення`,
		icon: 'NotepadText',
	},
];

export const DASBOARD: ISidebarPage[] = [
	{
		page: `${PAGES.DASHBOARD_PRODUCTS}`,
		title: 'Продукція',
		icon: 'CakeSlice',
	},
	{
		page: `${PAGES.DASHBOARD_CAKES}`,
		title: 'Торти',
		icon: 'Cake',
	},
	{
		page: `${PAGES.DASHBOARD_GALLERY}`,
		title: 'Галерея',
		icon: 'Images',
	},
	{
		page: `${PAGES.DASHBOARD_ORDERS}`,
		title: 'Замовлення',
		icon: 'NotebookPen',
	},
	{
		page: `${PAGES.DASHBOARD_USERS}`,
		title: 'Користувачі',
		icon: 'Users',
	},
];

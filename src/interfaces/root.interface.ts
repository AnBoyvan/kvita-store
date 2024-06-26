import type { icons } from 'lucide-react';

export interface IBase {
	_id: string;
	createdAt: string;
	updatedAt: string;
}

export interface IRemoveResponse {
	_id: string;
	message: string;
}

export interface IErrorResponse {
	statusCode: number;
	message: string | string[];
	timestamp: string;
	path: string;
}

export interface ISidebarPage {
	page: string;
	title: string;
	icon: keyof typeof icons;
}

export interface IConfig {
	value: string | boolean | number;
	title: string;
}

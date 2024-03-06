import { IBase } from './root.interfaces';

export enum Category {
	Classic = 'classic',
	Cheesecake = 'cheesecake',
	Dessert = 'dessert',
	Set = 'set',
	Other = 'other',
}

export interface IProduct extends IBase {
	name: string;
	price: number;
	promo?: number;
	promoPrice?: number;
	description?: string;
	category: Category;
	imageURL?: string;
	imageGallery?: string[];
	calories?: number;
	proteins?: number;
	fats?: number;
	carbohydrates?: number;
	favorite?: string[];
	isActive?: boolean;
	isNewProduct?: boolean;
}

export interface IProductCreate {
	image: File;
	gallery: File[];
	name: string;
	price: number;
	promo?: number;
	promoPrice?: number;
	description?: string;
	category: Category;
	calories?: number;
	proteins?: number;
	fats?: number;
	carbohydrates?: number;
}

export interface IProductUpdate {
	image?: File;
	gallery?: File[];
	name: string;
	price: number;
	promo?: number;
	promoPrice?: number;
	description?: string;
	category: Category;
	imageURL?: string;
	imageGallery?: string[];
	calories?: number;
	proteins?: number;
	fats?: number;
	carbohydrates?: number;
	isActive?: boolean;
	isNewProduct?: boolean;
}

export interface IProductResponse {
	result: IProduct[];
	count: number;
}

export interface IProductForMain {
	classic: IProduct[];
	cheesecake: IProduct[];
	dessert: IProduct[];
	set: IProduct[];
	other: IProduct[];
}

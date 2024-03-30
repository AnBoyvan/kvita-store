import { IBase } from './root.interface';

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
	promo?: number | null;
	promoPrice?: number | null;
	description?: string;
	category: string;
	imageURL: string;
	imageGallery?: string[];
	calories?: number | null;
	proteins?: number | null;
	fats?: number | null;
	carbohydrates?: number | null;
	favorite: string[];
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
	minProductPrice: number;
	maxProductPrice: number;
}

export interface IProductsForMain {
	classic: IProduct[];
	cheesecake: IProduct[];
	dessert: IProduct[];
	set: IProduct[];
	other: IProduct[];
}

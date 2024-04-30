import * as Yup from 'yup';

import { Category, IProductUpdate, type IProductCreate } from '@/interfaces';

export const createProductSchema: Yup.ObjectSchema<IProductCreate> = Yup.object().shape({
	image: Yup.mixed<File>()
		.test('fileFormat', 'Непідтримуваний формат файлу', value => {
			if (!value) {
				return false;
			}
			return value && value.type.startsWith('image/');
		})
		.required('Додайте зображення'),
	gallery: Yup.array()
		.of(
			Yup.mixed<File>()
				.test('fileFormat', 'Непідтримуваний формат файлу', value => {
					if (!value) {
						return false;
					}
					return value && value.type.startsWith('image/');
				})
				.required('Додайте зображення'),
		)
		.required('Додайте зображення'),
	name: Yup.string().required('Вкажіть назву'),
	price: Yup.number()
		.transform((value, originalValue) => (originalValue === '' ? undefined : value))
		.min(1, 'Вкажіть ціну')
		.required('Вкажіть ціну'),
	promo: Yup.number()
		.transform((value, originalValue) => (originalValue === '' ? undefined : value))
		.min(0),
	promoPrice: Yup.number()
		.transform((value, originalValue) => (originalValue === '' ? undefined : value))
		.when('promo', ([promo], Yup) => {
			return promo ? Yup.required('Вкажіть ціну із знижкою') : Yup.notRequired();
		}),
	description: Yup.string(),
	category: Yup.string()
		.oneOf(Object.values(Category), 'Вкажіть категорію')
		.required('Вкажіть категорію'),
	imageURL: Yup.string(),
	imageGallery: Yup.array().of(Yup.string().required()),
	calories: Yup.number()
		.transform((value, originalValue) => (originalValue === '' ? undefined : value))
		.min(0),
	proteins: Yup.number()
		.transform((value, originalValue) => (originalValue === '' ? undefined : value))
		.min(0),
	fats: Yup.number()
		.transform((value, originalValue) => (originalValue === '' ? undefined : value))
		.min(0),
	carbohydrates: Yup.number()
		.transform((value, originalValue) => (originalValue === '' ? undefined : value))
		.min(0),
	isActive: Yup.string(),
	isNewProduct: Yup.string(),
});

export const updateProductSchema: Yup.ObjectSchema<IProductUpdate> = Yup.object().shape({
	image: Yup.mixed<File>().test('fileFormat', 'Непідтримуваний формат файлу', value => {
		if (!value) {
			return true;
		}
		return value && value.type.startsWith('image/');
	}),
	gallery: Yup.array().of(
		Yup.mixed<File>()
			.test('fileFormat', 'Непідтримуваний формат файлу', value => {
				if (!value) {
					return true;
				}
				return value && value.type.startsWith('image/');
			})
			.required('Додайте зображення'),
	),
	name: Yup.string().required('Вкажіть назву'),
	price: Yup.number()
		.transform((value, originalValue) => (originalValue === '' ? undefined : value))
		.min(1, 'Вкажіть ціну')
		.required('Вкажіть ціну'),
	promo: Yup.number()
		.transform((value, originalValue) => (originalValue === '' ? undefined : value))
		.min(0),
	promoPrice: Yup.number()
		.transform((value, originalValue) => (originalValue === '' ? undefined : value))
		.when('promo', ([promo], Yup) => {
			return promo ? Yup.required('Вкажіть ціну із знижкою') : Yup.notRequired();
		}),
	description: Yup.string(),
	category: Yup.string()
		.oneOf(Object.values(Category), 'Вкажіть категорію')
		.required('Вкажіть категорію'),
	imageURL: Yup.string(),
	imageGallery: Yup.array().of(Yup.string().required()),
	calories: Yup.number()
		.transform((value, originalValue) => (originalValue === '' ? undefined : value))
		.min(0),
	proteins: Yup.number()
		.transform((value, originalValue) => (originalValue === '' ? undefined : value))
		.min(0),
	fats: Yup.number()
		.transform((value, originalValue) => (originalValue === '' ? undefined : value))
		.min(0),
	carbohydrates: Yup.number()
		.transform((value, originalValue) => (originalValue === '' ? undefined : value))
		.min(0),
	isActive: Yup.string(),
	isNewProduct: Yup.string(),
});

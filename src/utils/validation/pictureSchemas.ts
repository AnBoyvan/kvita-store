import * as Yup from 'yup';

import { IPictureCreate, IPictureUpdate } from '@/interfaces';

export const createPictureSchema: Yup.ObjectSchema<IPictureCreate> = Yup.object().shape({
	image: Yup.mixed<File>()
		.required('Додайте зображення')
		.test('fileFormat', 'Непідтримуваний формат файлу', value => {
			if (!value || value === undefined) {
				return false;
			}
			return value && value.type.startsWith('image/');
		}),
	title: Yup.string(),
	description: Yup.string(),
	tags: Yup.array().of(Yup.string().required()),
});

export const updatePictureSchema: Yup.ObjectSchema<IPictureUpdate> = Yup.object().shape({
	title: Yup.string(),
	description: Yup.string(),
	tags: Yup.array().of(Yup.string().required()),
});

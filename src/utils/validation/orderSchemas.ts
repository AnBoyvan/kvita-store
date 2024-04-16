import * as Yup from 'yup';

import { regexpConstants } from '@/constants';
import type { IOrderCreateForm } from '@/interfaces';

export const createOrdeSchema: Yup.ObjectSchema<IOrderCreateForm> = Yup.object().shape({
	name: Yup.string().required('Вкажіть ім’я').max(20, 'Не більше 20 символів'),
	email: Yup.string(),
	phone: Yup.string()
		.required('Вкажіть телефон')
		.matches(regexpConstants.PHONE, 'Вкажіть номер в форматі: +380ХХХХХХХХХ.'),
	isComment: Yup.boolean().required(),
	comment: Yup.string(),
	delivery: Yup.boolean().required(),
	deliveryAddress: Yup.string().when('delivery', ([delivery], Yup) => {
		return delivery ? Yup.required('Вкажіть адресу доставки') : Yup.notRequired();
	}),
});

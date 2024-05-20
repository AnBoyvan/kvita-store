import * as Yup from 'yup';

import { regexpConstants } from '@/constants';
import { Status, type IOrderCreateForm, type IOrderUpdate } from '@/interfaces';

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

export const updateOrdeSchema: Yup.ObjectSchema<IOrderUpdate> = Yup.object().shape({
	status: Yup.string()
		.oneOf(Object.values(Status), 'Вкажіть статус замовлення')
		.required('Вкажіть статус замовлення'),
	delivery: Yup.boolean().required(),
	deliveryAddress: Yup.string().when('delivery', ([delivery], Yup) => {
		return delivery ? Yup.required('Вкажіть адресу доставки') : Yup.notRequired();
	}),
	annotation: Yup.string().when('status', ([status], Yup) => {
		return status === Status.Canceled || status === Status.Rejected
			? Yup.required('Вкажіть причину відміни замовлення')
			: Yup.notRequired();
	}),
});

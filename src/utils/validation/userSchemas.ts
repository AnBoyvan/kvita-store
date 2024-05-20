import * as Yup from 'yup';

import { regexpConstants } from '@/constants';
import {
	Role,
	type IUserUpdate,
	type IUserUpdateByAdmin,
	type IUserUpdatePasswordForm,
} from '@/interfaces';

export const updByAdminSchema: Yup.ObjectSchema<IUserUpdateByAdmin> = Yup.object().shape({
	role: Yup.string().oneOf(Object.values(Role), 'Вкажіть статус').required('Вкажіть статус'),
	discount: Yup.number().min(0).required('Вкажіть знижку'),
});

export const updByUserSchema: Yup.ObjectSchema<Omit<IUserUpdate, 'cart'>> = Yup.object().shape({
	name: Yup.string().required('Вкажіть ім’я').max(20, 'Не більше 20 символів'),
	phone: Yup.string().matches(regexpConstants.PHONE, 'Вкажіть номер в форматі: +380ХХХХХХХХХ.'),
	email: Yup.string()
		.required('Вкажіть пошту')
		.matches(regexpConstants.EMAIL, 'Пошту вказано невірно'),
});

export const updPasswordSchema: Yup.ObjectSchema<IUserUpdatePasswordForm> = Yup.object().shape({
	password: Yup.string()
		.required('Вкажіть пароль')
		.min(6, 'Не менше 6 символів')
		.matches(regexpConstants.PASSWORD, 'Пароль повинен містити цифри та латинські літери'),
	newPassword: Yup.string()
		.required('Вкажіть новий пароль')
		.min(6, 'Не менше 6 символів')
		.matches(regexpConstants.PASSWORD, 'Пароль повинен містити цифри та латинські літери'),
	confirmNewPassword: Yup.string()
		.required('Вкажіть пароль')
		.oneOf([Yup.ref<string>('newPassword')], 'Паролі не співпадають'),
});

export const removeAccountSchema: Yup.ObjectSchema<{ password: string }> = Yup.object().shape({
	password: Yup.string().required('Вкажіть пароль'),
});

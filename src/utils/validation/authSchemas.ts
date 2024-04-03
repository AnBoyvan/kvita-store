import * as Yup from 'yup';

import { regexpConstants } from '@/constants';
import { ILoginForm, IRegisterForm } from '@/interfaces';

export const registerSchema: Yup.ObjectSchema<IRegisterForm> = Yup.object().shape({
	name: Yup.string().required('Вкажіть ім’я').max(20, 'Не більше 20 символів'),
	phone: Yup.string()
		.required('Вкажіть телефон')
		.matches(regexpConstants.PHONE, 'Вкажіть номер в форматі: +380ХХХХХХХХХ.'),
	email: Yup.string()
		.required('Вкажіть пошту')
		.matches(regexpConstants.EMAIL, 'Пошту вказано невірно'),
	password: Yup.string()
		.required('Вкажіть пароль')
		.min(6, 'Не менше 6 символів')
		.matches(regexpConstants.PASSWORD, 'Пароль повинен містити цифри та латинські літери'),
	confirmPassword: Yup.string()
		.required('Вкажіть пароль')
		.oneOf([Yup.ref<string>('password')], 'Паролі не співпадають'),
});

export const loginSchema: Yup.ObjectSchema<ILoginForm> = Yup.object().shape({
	login: Yup.string().required('Вкажіть пошту або телефон в форматі: +380ХХХХХХХХХ'),
	password: Yup.string()
		.required('Вкажіть пароль')
		.min(6, 'Не менше 6 символів')
		.matches(regexpConstants.PASSWORD, 'Пароль повинен містити цифри та латинські літери'),
});

export const requestSchema: Yup.ObjectSchema<{ email: string }> = Yup.object().shape({
	email: Yup.string()
		.required('Вкажіть пошту')
		.matches(regexpConstants.EMAIL, 'Пошту вказано невірно'),
});

export const passwordChangeSchema: Yup.ObjectSchema<{
	password: string;
	confirmPassword: string;
}> = Yup.object().shape({
	password: Yup.string()
		.required('Вкажіть пароль')
		.min(6, 'Не менше 6 символів')
		.matches(regexpConstants.PASSWORD, 'Пароль повинен містити цифри та латинські літери'),
	confirmPassword: Yup.string()
		.required('Вкажіть пароль')
		.oneOf([Yup.ref<string>('password')], 'Паролі не співпадають'),
});

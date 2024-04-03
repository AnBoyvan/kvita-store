'use client';

import { useState } from 'react';

import styles from './Auth.module.scss';
import { Login, Register } from './components';

import { Divider, Htag } from '@/components';
import { Button, GoogleButton } from '@/ui';

export const Auth: React.FC = () => {
	const [isLoginForm, setAuthToggle] = useState<boolean>(false);

	const changeAuthToggle = () => {
		setAuthToggle(isLoginForm ? false : true);
	};

	return (
		<div className={styles.auth}>
			<Htag tag="h2">{!isLoginForm ? 'Вхід' : 'Реєстрація'}</Htag>
			{!isLoginForm ? <Login /> : <Register />}
			<Button mode="link" onClick={changeAuthToggle} className={styles.button}>
				{!isLoginForm ? 'Зареєструватися' : 'Я вже зареєстрований'}
			</Button>
			<Divider />
			<GoogleButton />
		</div>
	);
};

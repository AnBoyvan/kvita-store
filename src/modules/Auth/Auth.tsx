'use client';

import { Divider } from '@/components/Divider/Divider';
import styles from './Auth.module.scss';
import Htag from '@/components/Htag/Htag';
import { Button } from '@/ui/Button/Button';
import { useState } from 'react';
import { Register } from './Register/Register';
import { Login } from './Login/Login';
import { GoogleButton } from './GoogleButton/GoogleButton';

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

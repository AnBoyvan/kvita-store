'use client';

import { Divider } from '@/components/Divider/Divider';
import styles from './Auth.module.scss';
import Htag from '@/components/Htag/Htag';
import { Button } from '@/ui/Button/Button';
import { useState } from 'react';
import { Register } from './Register/Register';
import { Login } from './Login/Login';
import { CloseModalButton } from '@/components/Modal/CloseModalButton/CloseModalButton';

export const Auth: React.FC = () => {
	const [isLoginForm, setAuthToggle] = useState<boolean>(false);

	const changeAuthToggle = () => {
		setAuthToggle(!isLoginForm ? false : true);
	};

	return (
		<div className={styles.auth}>
			<CloseModalButton />
			<Htag tag="h2">{isLoginForm ? 'Вхід' : 'Реєстрація'}</Htag>
			{!isLoginForm ? <Login /> : <Register />}
			<Button mode="link" onClick={changeAuthToggle}>
				{!isLoginForm ? 'Зареєструватися' : 'Я вже зареєстрований'}
			</Button>
			<Divider />
		</div>
	);
};

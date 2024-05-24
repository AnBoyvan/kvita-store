'use client';

import { Suspense, useState } from 'react';

import styles from './Auth.module.scss';
import { Login, Register } from './components';

import { Divider, Htag, Spinner } from '@/components/Shared';
import { Button, GoogleButton } from '@/components/UI';

export const Auth: React.FC = () => {
	const [isLoginForm, setAuthToggle] = useState<boolean>(false);

	const changeAuthToggle = () => {
		setAuthToggle(isLoginForm ? false : true);
	};

	return (
		<>
			<div className={styles.auth}>
				<Htag tag="h2">{!isLoginForm ? 'Вхід' : 'Реєстрація'}</Htag>
				<Suspense fallback={<Spinner />}>{!isLoginForm ? <Login /> : <Register />}</Suspense>
				<Button mode="link" onClick={changeAuthToggle} className={styles.button}>
					{!isLoginForm ? 'Зареєструватися' : 'Я вже зареєстрований'}
				</Button>
				<Divider />
				<GoogleButton />
			</div>
		</>
	);
};

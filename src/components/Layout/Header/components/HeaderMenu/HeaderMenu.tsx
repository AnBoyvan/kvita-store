'use client';

import { useState } from 'react';

import styles from './HeaderMenu.module.scss';

import { BurgerMenu } from '@/components/Features';
import { Icon } from '@/components/Shared';
import { Button } from '@/components/UI';

export const HeaderMenu: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Button mode="simple" onClick={handleClick} className={styles.menuBtn}>
				<Icon name="Menu" />
			</Button>

			{isOpen && <BurgerMenu onClose={handleClick} />}
		</>
	);
};

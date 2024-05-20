'use client';

import { UserInfoModal } from '../UserInfoModal/UserInfoModal';
import { UserInfoRemove } from '../UserInfoRemove/UserInfoRemove';
import { UserInfoUpdatePassword } from '../UserInfoUpdatePassword/UserInfoUpdatePassword';

import styles from './UserInfo.module.scss';

import { Icon } from '@/components/Shared';
import { useUserStore } from '@/store';

export const UserInfo: React.FC = () => {
	const { user } = useUserStore();

	return (
		<div className={styles.info}>
			<div className={styles.wrapper}>
				<Icon name="User" size={32} />
				<span>{user.name}</span>
			</div>
			<div className={styles.wrapper}>
				<Icon name="Smartphone" size={32} />
				<span>{user.phone}</span>
			</div>
			<div className={styles.wrapper}>
				<Icon name="Mail" size={32} />
				<span>{user.email}</span>
			</div>
			{Boolean(user.discount && user.discount > 0) && (
				<div className={styles.wrapper}>
					<Icon name="TicketPercent" size={32} />
					<span>{user.discount}%</span>
				</div>
			)}

			<UserInfoModal user={user} />
			<UserInfoUpdatePassword />
			<UserInfoRemove />
		</div>
	);
};

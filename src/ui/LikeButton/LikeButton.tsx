'use client';

import styles from './LikeButton.module.scss';
import { LikeButtonProps } from './LikeButton.props';
import { clsx } from 'clsx';
import { Icon } from '../Icon/Icon';
import { useMutateProducts } from '@/hooks/useMutateProducts';
import { useEffect, useState } from 'react';
import { useUserStore } from '@/store/user.store';

export const LikeButton: React.FC<LikeButtonProps> = ({
	productId,
	className,
	...props
}: LikeButtonProps) => {
	const { user } = useUserStore();
	const { isLoggedIn, favorite } = user;
	const { updFavorites } = useMutateProducts();
	const [isLiked, setIsLiked] = useState<boolean>(false);

	const handleLikeChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		await updFavorites(productId);
		setIsLiked(!isLiked);
	};

	useEffect(() => {
		const liked = Boolean(favorite.includes(productId));
		setIsLiked(liked);
	}, [favorite]);

	return (
		<>
			{isLoggedIn && (
				<label className={styles.container}>
					<input
						type="checkbox"
						checked={isLiked}
						onChange={handleLikeChange}
						className={styles.input}
						{...props}
					/>
					<span className={styles.checkmark}>
						<Icon name="Heart" size={32} className={clsx(styles.icon, isLiked && styles.hide)} />
						<Icon name="Heart" size={32} className={clsx(styles.liked, !isLiked && styles.hide)} />
					</span>
				</label>
			)}
		</>
	);
};

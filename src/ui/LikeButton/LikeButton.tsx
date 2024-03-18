'use client';

import { useSession } from 'next-auth/react';
import styles from './LikeButton.module.scss';
import { LikeButtonProps } from './LikeButton.props';
import { clsx } from 'clsx';
import { Icon } from '../Icon/Icon';
import { useMutateProducts } from '@/hooks/useMutateProducts';
import { useEffect, useState } from 'react';

export const LikeButton: React.FC<LikeButtonProps> = ({
	productId,
	favorites,
	className,
	...props
}: LikeButtonProps) => {
	const { data: session } = useSession();
	const { updFavorites } = useMutateProducts();
	const [isLiked, setIsLiked] = useState<boolean>(
		Boolean(favorites?.includes(session?.user?._id as string)),
	);

	const handleLikeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsLiked(!isLiked);
		updFavorites(productId);
	};

	useEffect(() => {
		if (session?.user) {
			setIsLiked(Boolean(favorites?.includes(session?.user?._id as string)));
		}
	}, [session]);

	return (
		<>
			{session?.user && (
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

'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './GalleryModal.module.scss';
import type { GalleryModalProps } from './GalleryModal.props';

import { Modal } from '@/components/Features';
import { useModal } from '@/hooks';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

export const GalleryModal: React.FC<GalleryModalProps> = ({ current, pictures, setCurrent }) => {
	const { modalRef, openModal } = useModal();

	const images = pictures?.map((item, index) => (
		<SwiperSlide key={index} className={styles.slide}>
			<Image
				src={item.largeImageURL}
				alt={item.title || 'sweets'}
				width={1000}
				height={1000}
				style={{ objectFit: 'contain', zIndex: -1, borderRadius: 'inherit' }}
				sizes="100vw"
				className={styles.image}
			/>
		</SwiperSlide>
	));

	const handleClose = () => {
		setCurrent(null);
	};

	useEffect(() => {
		if (current !== null) openModal();
	}, [current]);

	return (
		<>
			{current !== null && (
				<Modal ref={modalRef} button onClose={handleClose} centered className={styles.wrapper}>
					<Swiper
						spaceBetween={16}
						grabCursor={true}
						initialSlide={current}
						centeredSlides={true}
						onRealIndexChange={e => setCurrent(e.realIndex)}
						loop={true}
						slidesPerView={1}
						navigation={true}
						modules={[FreeMode, Navigation, Thumbs]}
						className={styles.swiper}
						autoHeight={true}
					>
						{images}
					</Swiper>
				</Modal>
			)}
		</>
	);
};

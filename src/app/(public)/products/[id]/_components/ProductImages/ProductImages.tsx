/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

import styles from './ProductImages.module.scss';
import type { ProductImagesProps } from './ProductImages.props';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './swiper.scss';

export const ProductImages: React.FC<ProductImagesProps> = ({ name, image, gallery, ...props }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

	const images = gallery.map((item, index) => (
		<SwiperSlide key={index} className={styles.slide}>
			<img src={item} alt={name} className={styles.image} loading="lazy" />
		</SwiperSlide>
	));

	const perView = gallery.length < 5 ? gallery.length : 5;

	return (
		<div className={styles.images} {...props}>
			<Swiper
				spaceBetween={16}
				loop={true}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
				modules={[FreeMode, Navigation, Thumbs]}
				className={styles.mainImage}
			>
				{images}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				loop={true}
				spaceBetween={16}
				slidesPerView={perView}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className={styles.swiper}
			>
				{images}
			</Swiper>
		</div>
	);
};

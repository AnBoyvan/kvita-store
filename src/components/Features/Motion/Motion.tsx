'use client';

import { motion } from 'framer-motion';
import { forwardRef, type ForwardedRef } from 'react';

import type { IMotionProps } from './Motion.props';
import { motionVariants } from './variants';

export const Motion = forwardRef(
	(
		{ children, variants, transition, ...props }: IMotionProps,
		ref: ForwardedRef<HTMLDivElement>,
	) => {
		return (
			<motion.div
				ref={ref}
				variants={{ ...motionVariants, ...variants }}
				transition={{ ease: 'easeInOut', duration: 0.2, ...transition }}
				{...props}
			>
				{children}
			</motion.div>
		);
	},
);

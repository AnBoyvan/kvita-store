'use client';

import { AnimatePresence } from 'framer-motion';

import { Motion } from '@/components/Features';

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<AnimatePresence>
			<Motion initial="hidden" animate="default">
				{children}
			</Motion>
		</AnimatePresence>
	);
}

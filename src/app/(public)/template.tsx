'use client';

import { Motion } from '@/components/Motion/Motion';
import { AnimatePresence } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<AnimatePresence>
			<Motion initial="hidden" animate="default">
				{children}
			</Motion>
		</AnimatePresence>
	);
}

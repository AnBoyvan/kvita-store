import Image from 'next/image';

import notFound from '../../public/images/not-found.png';

import { Htag } from '@/components/Shared';

export default function NotFoundPage() {
	return (
		<div className="mx-auto  px-4 md:px-6 lg:px-8 py-16 md:py-[72px] lg:py-24 min-h-screen flex flex-col justify-center items-center gap-8 lg:gap-16">
			<Image src={notFound} alt="not found" className="w-full h-auto max-w-96" />
			<Htag tag="h3" className="uppercase text-error">
				СТОРІНКУ НЕ ЗНАЙДЕНО
			</Htag>
		</div>
	);
}

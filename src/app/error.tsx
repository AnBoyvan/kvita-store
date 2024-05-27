'use client';

import { Htag, Icon } from '@/components/Shared';

export default function Error() {
	return (
		<div className="mx-auto  px-4 md:px-6 lg:px-8 py-16 md:py-[72px] lg:py-24 min-h-screen flex flex-col justify-center items-center gap-8 lg:gap-16">
			<Htag tag="h3" className="text-error text-center">
				Упс... Щось пішло не так <Icon size={64} name="Frown" />
			</Htag>
		</div>
	);
}

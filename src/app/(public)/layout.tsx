import { Container } from '@/components/Layout';
import { CallButton } from '@/components/UI';

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="max-w-[1600px] w-full  mx-auto">
			<Container>{children}</Container>
			<CallButton />
		</div>
	);
}

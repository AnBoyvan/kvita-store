import { Container } from '@/modules/Layout/Container/Container';

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="max-w-[1600px] w-full  mx-auto">
			<Container>{children}</Container>
		</div>
	);
}

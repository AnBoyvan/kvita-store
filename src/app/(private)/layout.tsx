import { Container, Sidebar } from '@/components';

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="relative w-full flex flex-row  mx-auto">
			<Sidebar />
			<div className="max-w-[1600px] lg:pl-12 w-full  mx-auto">
				<Container>{children}</Container>
			</div>
		</div>
	);
}

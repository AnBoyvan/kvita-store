import { Container } from '@/modules/Layout/Container/Container';

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="max-w-7xl">
			<Container>
				<div>container</div>
				{children}
			</Container>
		</div>
	);
}

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Замовлення',
	openGraph: {
		title: 'Замовлення',
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/ordering`,
	},
};

export default function OrderingPage() {
	return (
		<>
			<h1>Ordering</h1>
		</>
	);
}

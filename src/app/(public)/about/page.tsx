import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Про нас',
	openGraph: {
		title: 'Про нас',
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
	},
};

export default function AboutPage() {
	return (
		<>
			<h1>About</h1>;
		</>
	);
}

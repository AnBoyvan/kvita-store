/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
	transpilePackages: ['lucide-react'],
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.cloudinary.com',
			},
		],
	},
};

export default withPlaiceholder(nextConfig);

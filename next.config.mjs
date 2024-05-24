/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
	transpilePackages: ['lucide-react'],
	reactStrictMode: true,
	experimental: {
		optimizePackageImports: [
			'lucide-react',
			'react-select',
			'react-datepicker',
			'rc-slider',
			'swiper',
			'framer-motion',
			'sonner',
			'date-fns',
		],
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.cloudinary.com',
			},
		],
	},
};

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

export default bundleAnalyzer(nextConfig);

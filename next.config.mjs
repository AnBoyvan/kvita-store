/** @type {import('next').NextConfig} */

const nextConfig = {
	transpilePackages: ['lucide-react'],
	reactStrictMode: true,
	experimental: {
		missingSuspenseWithCSRBailout: false,
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

export default nextConfig;

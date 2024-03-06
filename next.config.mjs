/** @type {import('next').NextConfig} */
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

export default nextConfig;

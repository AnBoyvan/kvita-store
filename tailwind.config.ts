import type { Config } from 'tailwindcss';

const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--color-primary))',
				hover: 'rgb(var(--color-hover))',
				active: 'rgb(var(--color-active))',
				gray: 'rgb(var(--color-gray))',
				'gray-light': 'rgb(var(--color-gray-light))',
				error: 'rgb(var(--color-error))',
				success: 'rgb(var(--color-success))',
				pink: 'rgb(var(--color-pink))',
				blue: 'rgb(var(--color-blue))',
				'bg-primary': 'rgb(var(--bg-primary))',
				'bg-secondary': 'rgb(var(--bg-secondary))',
				'typo-primary': 'rgb(var(--typo-primary))',
				'typo-secondary': 'rgb(var(--typo-secondary))',
				'typo-dark': 'rgb(var(--typo-dark))',
				'typo-white': 'rgb(var(--typo-white))',
			},
			fontFamily: {
				primary: ['var(--font-open-sans)', ...defaultTheme.fontFamily.sans],
				secondary: ['var(--font-montserrat)', ...defaultTheme.fontFamily.serif],
				cursive: ['var(--font-mark-script)'],
			},

			borderRadius: {
				'3': '3px',
				'5': '5px',
				'10': '10px',
				'20': '20px',
				'50': '50px',
				'70': '70px',
				'150': '150px',
				'200': '200px',
			},
			fontSize: {
				'8': '0.5rem',
				'10': '0.625rem',
				'12': '0.75rem',
				'14': '0.875rem',
				'16': '1rem',
				'18': '1.125rem',
				'20': '1.25rem',
				'22': '1.375rem',
				'24': '1.5rem',
				'28': '1.75rem',
				'30': '1.875rem',
				'32': '2rem',
				'36': '2.25rem',
				'40': '2.5rem',
				'44': '2.75rem',
				'48': '3rem',
				'56': '3.5rem',
				'64': '4rem',
			},
			boxShadow: {
				hov: '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);',
				act: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);',
			},
			keyframes: {
				openMenuLeft: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				closeMenuLeft: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				openMenuRight: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				closeMenuRight: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' },
				},
				like: {
					'0%': { transform: 'scale(0)' },
					'50%': { transform: 'scale(1.2)' },
					'100%': { transform: 'scale(1)' },
				},
			},
			animation: {
				openMenuLeft: 'openMenuLeft 0.3s ease-in-out forwards',
				closeMenuLeft: 'closeMenuLeft 0.3s ease-in-out forwards',
				openMenuRight: 'openMenuRight 0.3s ease-in-out forwards',
				closeMenuRight: 'closeMenuRight 0.3s ease-in-out forwards',
				like: 'like 0.4s ease forwards',
			},
		},
	},
	plugins: [],
};
export default config;

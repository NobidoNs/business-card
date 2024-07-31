import type { Config } from 'tailwindcss'
import animations from '@midudev/tailwind-animations'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				DV7: '#7608fa',
				DV9: '#4c139c',
				LG4: '#00ff00',
				LG3: '#56ff50',
				LB: '#0091ff',
				LG: '#00ffff',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [require('tailwindcss-3d'), animations],
}
export default config

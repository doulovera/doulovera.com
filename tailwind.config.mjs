/** @type {import('tailwindcss').Config} */
export default {
	darkMode: [
		'variant', [
			'@media (prefers-color-scheme: dark) { &:not([scheme="light"] *) }',
			'&:is([scheme="dark"] *)',
		]
	],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'outline': '0 0 0 2px',
				'outline_gray': '0 0 0 2px #e5e7eb',
				'outline-no-left': '1px 1px 0 1px, 1px -1px 0 1px',
				'outline-no-bottom': '-1px -1px 0 1px, 1px -1px 0 1px',
			},
			colors: {
				brand: {
					DEFAULT: '#dbeafe',
					dark: '#4d5b92',
				},
				light: {
					DEFAULT: '#fff'
				},
				dark: {
					DEFAULT: '#000'
				},
			}
		},
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'outline': '0 0 0 2px black',
				'outline_gray': '0 0 0 2px #e5e7eb',
				'outline-no-left': '1px 1px 0 1px black, 1px -1px 0 1px black',
				'outline-no-bottom': '-1px -1px 0 1px black, 1px -1px 0 1px black',
				'outline_gray-no-bottom': '-1px -1px 0 1px #e5e7eb, 1px -1px 0 1px #e5e7eb',
			},
			colors: {
				brand: {
					DEFAULT: '#dbeafe'
				}
			}
		},
	},
	plugins: [],
}

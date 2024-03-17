/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			screens: {
				sm: '600px',
				md: '728px',
				lg: '984px',
				xl: '1140px',
			},
			padding: {
				xs: '1rem',
			}
		},
		extend: {},
	},
	plugins: [],
}

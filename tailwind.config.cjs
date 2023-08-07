/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			'my-dark': '#191728',
			'my-accent-dark': '#382F67',
			'my-accent-light': '#6270B7',
			'my-light': '#8594BE',
			'my-white': '#EBEDF1',
			'rgb-dark': 'rgb(25, 23, 40, 100)',
			'rgb-accent-dark': 'rgb(56, 47, 103)',
			'rgb-accent-light': 'rgb(98, 112, 183)',
			'rgb-light': 'rgb(133, 148, 190)',
			'rgb-white': 'rgb(235, 237, 241)',
		},
		extend: {
			screens: {
				'mobile': '428px',
				'popular': '1366px',
				'large': '1920px',
			},
		},
	},
	plugins: [],
}

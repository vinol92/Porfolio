
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
}

/*
import defaultTheme from 'tailwindcss/defaultTheme'

///** @type {import('tailwindcss').Config} */
//export default {
//content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
//theme: {
//	extend: {
//		fontFamily: {
//			sans: ['Inter', ...defaultTheme.fontFamily.sans],
//		},
//	},
//	},
//	plugins: [],
//}
//
/** @type {import('tailwindcss').Config} */
module.exports = {
	
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [
		  {
			mytheme: {
			
   "primary": "#2f7ddb",
			
   "secondary": "#2f7ddb",
			
   "accent": "#2f7ddb",
			
   "neutral": "#2f7ddb",
			
   "base-100": "#ffffff",
			
   "info": "#2f7ddb",
			
   "success": "#2f7ddb",
			
   "warning": "#2f7ddb",
			
   "error": "#2f7ddb",
			},
		  },
		],
	  },
}

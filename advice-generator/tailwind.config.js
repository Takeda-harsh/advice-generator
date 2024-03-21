/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				bg1: 'hsl(217, 19%, 24%)',
				bg2: 'hsl(150, 100%, 66%)',
			},
		},
	},
	plugins: [],
};

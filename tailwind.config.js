/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const BASE_SIZE = 18; // in pixels
const FONT_SIZE_ROUNDER = 4;
const LINE_HEIGHT_BODY = '1.7';
const LINE_HEIGHT_HEADING = '1.2';

const size = (multiplicator = 1) => {
	let fontSize = Math.round(BASE_SIZE * multiplicator);
	while (fontSize % FONT_SIZE_ROUNDER !== 0) fontSize++;
	return fontSize + 'px';
};

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

	theme: {
		colors: {
			primary: 'hsl(185, 89%, 28%)',

			darkest: 'hsl(185, 7%, 24%)',
			dark: 'hsl(185, 5%, 44%)',
			medium: 'hsl(185, 24%, 49%)',
			light: 'hsl(185, 51%, 92%)',
			lightest: 'hsl(185, 33%, 97%)',

			'darkest-shade': 'hsl(185, 0%, 24%)',
			'dark-shade': 'hsl(185, 0%, 44%)',
			'medium-shade': 'hsl(185, 0%, 49%)',
			'light-shade': 'hsl(185, 0%, 92%)',
			'lightest-shade': 'hsl(185, 0%, 97%)',

			white: '#FFFFFF',
			transparent: 'transparent',
		},

		fontSize: {
			300: [size(0.8), { lineHeight: LINE_HEIGHT_BODY }],
			400: [size(), { lineHeight: LINE_HEIGHT_BODY }],
			500: [size(1.2), { lineHeight: LINE_HEIGHT_HEADING }],
			600: [size(1.6), { lineHeight: LINE_HEIGHT_HEADING }],
			700: [size(2), { lineHeight: LINE_HEIGHT_HEADING }],
			800: [size(2.4), { lineHeight: LINE_HEIGHT_HEADING }],
			900: [size(3), { lineHeight: LINE_HEIGHT_HEADING }],
			1000: [size(3.8), { lineHeight: LINE_HEIGHT_HEADING }],
		},

		spacing: {
			px: '1px',
			0: '0px',
			xs: '8px',
			sm: '16px',
			md: '24px',
			lg: '32px',
			xl: '48px',
			xxl: '80px',
		},

		screens: {
			md: '768px',
		},

		maxWidth: {
			prose: '64ch',
			compact: '18ch',
		},

		lineHeight: {
			none: '1',
			normal: '1.7',
			heading: '1.1',
		},

		fontFamily: {
			base: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
			heading: ['"Eczar"', 'Times New Roman', 'serif'],
		},

		fontWeight: {
			normal: '400',
			bold: '700',
		},

		extend: {},
	},

	plugins: [
		plugin(({ theme, addUtilities }) => {
			addUtilities(
				{
					// Set default gap value to 'md' spacing
					'.gap': { gap: theme('spacing.md') },
				},
				['responsive']
			);
		}),
	],

	corePlugins: {
		preflight: false,
	},
};

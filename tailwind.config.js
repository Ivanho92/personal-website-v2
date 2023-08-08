/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin.js';

const BASE_SIZE = 18; // in pixels
const FONT_SIZE_ROUNDER = 4;
const HUE_COLOR_VALUE = '185';

const size = (multiplicator = 1) => {
	let fontSize = Math.round(BASE_SIZE * multiplicator);
	while (fontSize % 2 !== 0) fontSize++;
	return fontSize + 'px';
};

const config = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

	theme: {
		colors: {
			primary: `hsl(${HUE_COLOR_VALUE}, 89%, 28%)`,

			darkest: `hsl(${HUE_COLOR_VALUE}, 7%, 24%)`,
			dark: `hsl(${HUE_COLOR_VALUE}, 5%, 44%)`,
			medium: `hsl(${HUE_COLOR_VALUE}, 24%, 49%)`,
			light: `hsl(${HUE_COLOR_VALUE}, 51%, 92%)`,
			lightest: `hsl(${HUE_COLOR_VALUE}, 33%, 97%)`,

			'darkest-shade': `hsl(${HUE_COLOR_VALUE}, 0%, 24%)`,
			'dark-shade': `hsl(${HUE_COLOR_VALUE}, 0%, 44%)`,
			'medium-shade': `hsl(${HUE_COLOR_VALUE}, 0%, 49%)`,
			'light-shade': `hsl(${HUE_COLOR_VALUE}, 0%, 92%)`,
			'lightest-shade': `hsl(${HUE_COLOR_VALUE}, 0%, 97%)`,

			white: '#FFFFFF',
			transparent: 'transparent',
		},

		fontSize: {
			300: [size(0.8)],
			400: [size()],
			500: [size(1.2)],
			600: [size(1.6)],
			700: [size(2)],
			800: [size(2.4)],
			900: [size(3)],
			1000: [size(3.8)],
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
			base: '64ch',
			compact: '18ch',
		},

		lineHeight: {
			none: '1',
			base: '1.7',
			heading: '1.1',
		},

		fontFamily: {
			base: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
			heading: ['"Eczar"', 'Times New Roman', 'serif'],
		},

		fontWeight: {
			regular: '400',
			bold: '700',
		},

		extend: {},
	},

	plugins: [
		plugin(({ theme, addUtilities }) => {
			/* #region 'flow' utilities based on spacing values */
			const flowUtilities = {};
			Object.entries(theme('spacing')).forEach(([size, value]) => {
				flowUtilities[`.flow-${size}`] = {
					'--space': value,
				};
			});
			addUtilities(flowUtilities, ['responsive']);
			/* #endregion */

			/* #region 'gap' default value */
			addUtilities(
				{
					'.gap': { gap: theme('spacing.md') },
				},
				['responsive']
			);
			/* #endregion */
		}),
	],

	corePlugins: {
		preflight: false,
	},
};

export default config;

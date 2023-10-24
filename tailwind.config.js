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
			'primary-shade': `hsl(${HUE_COLOR_VALUE}, 89%, 24%)`,

			darkest: `hsl(${HUE_COLOR_VALUE}, 7%, 24%)`,
			dark: `hsl(${HUE_COLOR_VALUE}, 5%, 44%)`,
			medium: `hsl(${HUE_COLOR_VALUE}, 24%, 49%)`,
			light: `hsl(${HUE_COLOR_VALUE}, 51%, 92%)`,
			lightest: `hsl(${HUE_COLOR_VALUE}, 33%, 97%)`,

			'darkest-grey': `hsl(${HUE_COLOR_VALUE}, 0%, 24%)`,
			'dark-grey': `hsl(${HUE_COLOR_VALUE}, 0%, 44%)`,
			'medium-grey': `hsl(${HUE_COLOR_VALUE}, 0%, 49%)`,
			'light-grey': `hsl(${HUE_COLOR_VALUE}, 0%, 92%)`,
			'lightest-grey': `hsl(${HUE_COLOR_VALUE}, 0%, 97%)`,

			black: '#000000',
			white: '#FFFFFF',
			transparent: 'transparent',
		},

		fontSize: {
			300: [size(0.8)],
			"base": [size()],
			400: [size()],
			450: [size(1.1)],
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
			md: '960px',
			container: '960px'
		},

		maxWidth: {
			base: '64ch',
			compact: '24ch',
		},

		lineHeight: {
			none: '1',
			base: '1.7',
			heading: '1.1',
			button: '1.3',
		},

		letterSpacing: {
      tight: '-0.036em',
      normal: '0em',
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

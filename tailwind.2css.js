import fs from 'fs';
import prettier from 'prettier';
import config from './tailwind.config.js';
import chalk from 'chalk';

const conversionConfig = {
	dest: './src/assets/css/_variables.css',
	groups: [
		{ key: 'colors', prefix: 'color' },
		{ key: 'spacing', prefix: 'space' },
		{ key: 'fontSize', prefix: 'size' },
		{ key: 'screens', prefix: 'breakpoint' },
		{ key: 'maxWidth', prefix: 'measure' },
		{ key: 'lineHeight', prefix: 'line-height' },
		{ key: 'fontFamily', prefix: 'font' },
		{ key: 'fontWeight', prefix: 'weight' },
	],
};

/**
 * @description Converts the tailwind config elements into custom css variables
 * @param {Configuration} configObject
 * @returns {void}
 */
const tailwindToCssVariables = ({ groups, dest }) => {
	let result = '';

	// Add a note that this is auto generated
	result += `
    /* VARIABLES GENERATED WITH TAILWIND CONFIG ON ${new Date().toLocaleDateString()}.
    Tokens location: ./tailwind.config.js */

    :root {
  `;

	// Loop each group's keys, use that and the associated
	// property to define a :root custom prop
	groups.forEach(({ key, prefix }) => {
		const group = config.theme[key];

		if (!group) {
			return;
		}

		Object.keys(group).forEach((key) => {
			result += `--${prefix}-${key}: ${group[key]};`;
		});
	});

	// Close the :root block
	result += `
    }
  `;

	// Make the CSS readable to help people with auto-complete in their editors
	result = prettier.format(result, { parser: 'scss' });

	// Push this file into the CSS dir, ready to go
	fs.writeFileSync(dest, result);
	console.log(chalk.green.inverse('Tailwind config to CSS conversion completed! ✓'));
	console.log('Open file => ' + chalk.blue.bold(dest) + '\n');
};

tailwindToCssVariables(conversionConfig);
export { tailwindToCssVariables };

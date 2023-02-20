module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				'1.6vw': '5vw',
			},
			screens: {
				tablet: '640px',
			},
			minHeight: {
				// prettier-ignore
				'300': '300px',
			},
			maxHeight: {
				// prettier-ignore
				'300': '300px',
				// prettier-ignore
				'450': '450px',
				// prettier-ignore
				'550': '550px',
			},
			minWidth: {
				// prettier-ignore
				'300': '300px',
				// prettier-ignore
				'320': '320px',
			},
			maxWidth: {
				// prettier-ignore
				'880': '880px',
			},
			spacing: {
				// prettier-ignore
				'13': '3.25rem',
				// prettier-ignore
				'880': '880px',
				// prettier-ignore
				'320': '580px',
			},
			gridTemplateColumns: {},
			gridTemplateRows: {
				// Complex site-specific row configuration
				two: 'min-content 1fr',
			},
			colors: {
				'color-1': '#F8F8F8',
				'nike-light-gray': '#757575',
				'nike-light-gray-bg': '#f5f5f5',
				'nike-light-gray-bg-hovered': '#E5E5E5',
				'nike-ad': '#e7e7e7',
				'nike-main-ad': '#F1F0EB',
				'nike-white': '#FFFFFF',
				'nike-black': '#111111',
			},
			height: {
				// prettier-ignore
				'xxll': '550px',
				// prettier-ignore
				'300': '300px',
			},
			width: {
				// prettier-ignore
				'300': '300px',
			},
			padding: {
				// prettier-ignore
				'2/3': '66.666667%',
			},
			fontFamily: {
				// prettier-ignore
				'futura': ['Futura-Bold'],
				// prettier-ignore
				'futura-condensed': ['Futura Condensed'],
				'helvetica-neue-medium-cond': ['HelveticaNeue MediumCond'],
				'helvetica-neue-medium': ['HelveticaNeue Medium'],
				'helvetica-neue-regular': ['HelveticaNeue Regular'],
				// prettier-ignore
				'tradegothic': ['TradeGothic LT'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
	],
};

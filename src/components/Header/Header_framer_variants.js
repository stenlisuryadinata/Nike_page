export const SearchVariants = {
	closed: {
		opacity: 0,
		width: '200px',
		transition: {
			duration: 0.5,
		},
	},
	opened: {
		opacity: 1,
		width: '100%',
		height: '100vh',
		transition: {
			duration: 0.6,
			// delay: 1,
		},
	},
};

export const SearchInputVariants = {
	closed: {
		opacity: 0,
		width: '200px',
		transition: {
			duration: 0.5,
		},
	},
	opened: {
		opacity: 1,
		width: '100%',
		transition: {
			duration: 0.4,
			// delay: 1,
		},
	},
};

export const PopularSearchVariants = {
	initial: {
		opacity: 0,
		y: -20,
	},
	opened: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			delayChildren: 0.1,
			delay: 0.3,
		},
	},
};

export const HeaderHolderVariants = {
	closed: {
		width: '200px',
		transition: {
			duration: 0.5,
		},
	},
	opened: {
		width: '100%',
		height: '100vh',
		position: 'fixed',
		transition: {
			duration: 0.5,
		},
	},
};

export const HamburgerMenuBackground = {
	initial: {
		opacity: 0,
		transition: {
			duration: 0.5,
		},
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
};

export const HamburgerMenuSide = {
	initial: {
		opacity: 0,
		x: 100,
		transition: {
			duration: 0.5,
		},
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.3,
		},
	},
};

export const FirstRow = {
	initial: {
		x: 100,
		transition: {
			duration: 0.5,
		},
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.3,
		},
	},
	exit: {
		y: -100,
		transition: {
			duration: 0.3,
		},
	},
};

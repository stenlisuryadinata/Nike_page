import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import menuItemsData from '/src/data/menu_items.js';
import MenuItems from './MenuItems.js';

// Framer motion variants for animations
const menuHolder = {
	hidden: { height: 0 },
	visible: {
		height: 'auto',
		transition: {
			delayChildren: 0.2,
			// staggerDirection: 1,
		},
	},
};
// Framer motion variants for animations
const menuItems = {
	hidden: { opacity: 0, y: -6 },
	visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [isCurrentMenuHovered, setIsCurrentMenuHovered] = useState(false);

	const HoverToggle = () => {
		setIsHovered(!isHovered);
	};

	return (
		<AnimatePresence>
			<nav
				className={`header-menu z-60`}
				onMouseEnter={HoverToggle}
				onMouseLeave={HoverToggle}
			>
				<ul className="hidden lg:flex flex justify-between self-center font-medium main-navigation-animation">
					{menuItemsData.map((menu, index) => {
						const depthLevel = 0;
						return (
							<MenuItems menuItems={menu} key={index} depthLevel={depthLevel} />
						);
					})}
				</ul>
			</nav>
		</AnimatePresence>
	);
};

export default Navbar;

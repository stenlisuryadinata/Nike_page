import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { motion } from 'framer-motion';

const HamburgerMenuIcon = (props) => {
	// const { isHamburgerToggle, setIsHamburgerToggle } = { ...props };
	// console.log(props);
	return (
		<motion.div className="lg:hidden w-9 h-9 rounded-full hover:bg-nike-light-gray-bg-hovered">
			<HamburgerMenu
				className="lg:hidden mt-3 ml-2"
				isOpen={props.isHamburgerToggle}
				menuClicked={() => props.setIsHamburgerToggle(!props.isHamburgerToggle)}
				width={17}
				height={12}
				strokeWidth={2}
				rotate={0}
				color="black"
				borderRadius={0}
				animationDuration={0.5}
			/>
		</motion.div>
	);
};

export default HamburgerMenuIcon;

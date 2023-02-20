import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuHolder = {
	hidden: { opacity: 0, y: -15 },
	visible: {
		opacity: 1,
		y: 0,

		transition: {
			type: 'circOut',
			delayChildren: 0.2,
			duration: 0.2,
			// staggerDirection: 1,
		},
	},
};

const helpMenuItems = [
	'Order Status',
	'Shipping &amp Delivery',
	'Returns',
	'Size Shoes',
	'Contact Us',
	'Privacy Policy',
	'Terms of Sale',
	'Terms of Use',
	'Send Us Feedback',
];

const HoverMenuForHelp = (props) => {
	return (
		<motion.div
			variants={menuHolder}
			initial="hidden"
			animate="visible"
			onMouseLeave={props.handleMouseOut}
			className="bg-white p-5 absolute right-40 top-10 mr-8 z-20 text-sm text-medium"
		>
			<p className="pb-3 font-bold cursor-pointer">Help</p>
			<ul className="text-nike-light-gray">
				{helpMenuItems.map((helpMenuItem) => (
					<li className="py-1 pr-6 cursor-pointer hover:text-nike-black">
						{helpMenuItem}
					</li>
				))}
			</ul>
		</motion.div>
	);
};

export default HoverMenuForHelp;

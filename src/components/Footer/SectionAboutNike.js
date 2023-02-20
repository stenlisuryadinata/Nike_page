import React from 'react';
import { motion } from 'framer-motion';

const SectionAboutNike = (props) => {
	return (
		<motion.ul
			layout
			className="text-gray-200 text-sm leading-6 sm:pt-0"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.4 }}
		>
			{props.menuColumnThree.map((menu) => {
				return (
					<motion.li
						key={menu.title}
						layout
						className="mb-1 opacity-40 hover:opacity-100 cursor-pointer"
					>
						{menu.title}
					</motion.li>
				);
			})}
			<motion.div
				layout
				className="sm:hidden h-px w-full my-5 bg-nike-light-gray opacity-40"
			/>
		</motion.ul>
	);
};

export default SectionAboutNike;

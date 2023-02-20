import React from 'react';
import { motion } from 'framer-motion';
import { BsGeoAlt } from 'react-icons/bs';

const LastRow = (props) => {
	return (
		<motion.div layout className="sm:flex sm:justify-between mt-5">
			<motion.div layout className="sm:flex">
				<motion.div
					layout
					className="text-white text-xs flex mb-5 sm:mb-0 sm:mr-5 flex flex-wrap content-end"
				>
					<BsGeoAlt color="white" className="mr-3" size="1rem" />
					<motion.p layout className="whitespace-nowrap">
						United States
					</motion.p>
				</motion.div>
				<motion.p
					layout
					className="text-xs text-white opacity-40 my-5 sm:my-0 whitespace-nowrap self-end"
				>
					© 2021 Nike, Inc. All Rights Reserved
				</motion.p>
			</motion.div>
			<motion.div
				layout
				className="mt-8 sm:mt-0 text-white text-xs flex flex-col justify-items-end"
			>
				<motion.ul
					layout
					className="sm:justify-end sm:flex whitespace-nowrap justify-self-end"
				>
					<motion.div
						layout
						className="h-px w-full sm:my-4 opacity-40 hidden sm:block"
					/>
					{props.TermsOfUse.map((menu) => {
						return (
							<motion.li
								layout
								key={menu.title}
								className="pb-6 mr-3 opacity-40 hover:opacity-100 cursor-pointer"
							>
								{menu.title}
							</motion.li>
						);
					})}
				</motion.ul>
				<motion.p layout className="sm:text-right mr-4 text-nike-light-gray">
					CA Supply Chains Act
				</motion.p>
			</motion.div>
		</motion.div>
	);
};

export default LastRow;

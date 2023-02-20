import React, { useState } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

import {
	menuColumnOne,
	menuColumnTwo,
	menuColumnThree,
	TermsOfUse,
} from './Footer_data.js';

import BottomColumn from './Bottom_column';
import SectionSocialMedia from './SectionSocialMedia';
import LastRow from './Last_Row.js';

const Footer_Two = (props) => {
	const [isGetHelpClicked, setIsGetHelpClicked] = useState(false);
	const [isAboutNikeClicked, setIsAboutNikeClicked] = useState(false);
	const width = props.width;

	const getHelpToggle = () => {
		width < 640 && setIsGetHelpClicked(!isGetHelpClicked);
		width < 640 && isAboutNikeClicked && setIsAboutNikeClicked(false);
	};

	const aboutNikeToggle = () => {
		console.log('test');
		width < 640 && setIsAboutNikeClicked(!isAboutNikeClicked);
		width < 640 && isGetHelpClicked && setIsGetHelpClicked(false);
	};

	return (
		<motion.div
			layout
			transition={{ ease: 'easeOut', duration: 0.4 }}
			className="w-full bg-nike-black p-6 md:p-14 font-helvetica-neue-medium overflow-x-hidden"
		>
			{/* Row 1 */}
			<motion.div layout className="sm:flex justify-between">
				{/* Row 1 Column 1 */}
				<motion.ul
					layout
					className="sm:mr-12 md:mr-20 uppercase text-nike-white text-sm font-tradegothic leading-7 "
				>
					{menuColumnOne.map((menu) => {
						return (
							<motion.li
								layout
								key={menu.title}
								className="mb-1 whitespace-nowrap cursor-pointer"
							>
								{menu.title}
							</motion.li>
						);
					})}
					<motion.div
						layout
						className={`h-px w-full bg-nike-light-gray opacity-40 my-4 sm:hidden`}
					/>
				</motion.ul>
				{/* Row 1 Column 2 */}
				<BottomColumn
					title="Get Help"
					width={props.width}
					toggle={getHelpToggle}
					menuColumnData={menuColumnTwo}
					isClicked={isGetHelpClicked}
					isClickedThatHides={isAboutNikeClicked}
				/>

				{/* Row 1 Column 3 */}
				<BottomColumn
					title="About Nike"
					width={props.width}
					toggle={aboutNikeToggle}
					menuColumnData={menuColumnThree}
					isClicked={isAboutNikeClicked}
					isClickedThatHides={isGetHelpClicked}
				/>
				{/* Row 1 Column 4 */}
				<SectionSocialMedia />
			</motion.div>
			{/* Row 2 */}
			<LastRow TermsOfUse={TermsOfUse} />
		</motion.div>
	);
};

export default Footer_Two;

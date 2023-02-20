import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FeaturedSection } from './Footer_data';

const FooterMenuColumn = (props) => {
	const [isMobileTitleClicked, setIsMobileTitleClicked] = useState(false);
	const { width, isHovered, setIsHovered } = { ...props };

	const pressMobileTitle = () => {
		setIsMobileTitleClicked(!isMobileTitleClicked);
	};

	const ShowMenu = () => {
		console.log('test show');
		setIsHovered(true);
	};

	return (
		<motion.div layout onPointerEnter={() => ShowMenu()}>
			<motion.h4
				layout
				className="cursor-pointer mb-6 md:mb-0 md:row-start-1"
				onClick={pressMobileTitle}
			>
				{props.title}
			</motion.h4>

			{width < 640 && isMobileTitleClicked ? (
				<DepartmentsList
					department={props.department}
					width={width}
					isMobileTitleClicked={isMobileTitleClicked}
				/>
			) : (
				width > 640 && (
					<DepartmentsList
						width={width}
						isHovered={isHovered}
						department={props.department}
						isMobileTitleClicked={isMobileTitleClicked}
					/>
				)
			)}
		</motion.div>
	);
};

const DepartmentsList = (props) => {
	//Dynamic array which depends on the window width and hover state
	const dynamicList = props.department.slice(
		0,
		props.width < 640 && (props.isHovered || props.isMobileTitleClicked)
			? props.department.length
			: props.width > 640 && props.isHovered
			? props.department.length
			: 3
	);

	return (
		<motion.ul
			layout
			transition={{ ease: 'easeInOut', duration: 0.6 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			role="list"
			className="text-nike-light-gray ml-7 sm:ml-0 my-6"
		>
			{dynamicList.map((menuItem) => {
				return (
					<motion.li
						layout
						key={menuItem.title}
						className="mb-3 cursor-pointer pr-2 sm:w-40 hover:text-gray-800 whitespace-nowrap"
						transition={{ ease: 'easeInOut', duration: 0.6 }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						{menuItem.title}
					</motion.li>
				);
			})}
		</motion.ul>
	);
};

export default FooterMenuColumn;

import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

const BottomColumn = (props) => {
	const {
		isClicked,
		isClickedThatHides,
		menuColumnData,
		toggle,
		width,
		title,
	} = {
		...props,
	};

	return (
		<motion.div layout className="sm:mr-12 lg:mr-20">
			<motion.h3
				layout
				onClick={toggle}
				className="font-tradegothic text-white uppercase whitespace-nowrap cursor-pointer flex justify-between pb-6 sm:pb-3"
			>
				{title}
				<motion.div className="sm:hidden">
					{isClicked ? (
						<AiOutlineMinus className="mt-1" />
					) : (
						<AiOutlinePlus className="mt-1" />
					)}
				</motion.div>
			</motion.h3>

			{width < 640 && isClicked && !isClickedThatHides ? (
				<DepartmentsList
					width={width}
					menuColumnData={menuColumnData}
					isClicked={isClicked}
				/>
			) : (
				width > 640 &&
				!isClickedThatHides && (
					<DepartmentsList
						width={width}
						menuColumnData={menuColumnData}
						isClicked={isClicked}
					/>
				)
			)}
		</motion.div>
	);
};

const DepartmentsList = (props) => {
	return (
		<motion.ul
			layout
			className="text-gray-200 text-sm leading-6 whitespace-nowrap"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.4 }}
		>
			{props.menuColumnData.map((menu) => {
				return (
					<motion.li
						layout
						key={menu.title}
						className="mb-1 opacity-40 hover:opacity-100 cursor-pointer whitespace-nowrap"
					>
						{menu.title}
					</motion.li>
				);
			})}
			{props.width < 640 && props.isClicked && (
				<motion.div
					layout
					className="h-px w-full my-5 bg-nike-light-gray opacity-40"
				/>
			)}
		</motion.ul>
	);
};

export default BottomColumn;

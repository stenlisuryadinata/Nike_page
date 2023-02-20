import React, { useState } from 'react';
import HoverMenuForHelp from '../Header/HoverMenuForHelp';

const FirstRow = () => {
	const [isHoveringHelp, setIsHoveringHelp] = useState(false);

	const handleMouseOverHelp = () => {
		setIsHoveringHelp(true);
	};

	const handleMouseOutHelp = () => {
		setIsHoveringHelp(false);
	};

	return (
		<div className="hidden lg:flex bg-nike-light-gray-bg justify-between py-2 px-12 z-10">
			<div className="flex justify-between w-16">
				<img
					width="22px"
					src="/images/jordan.svg"
					alt="jordan logo"
					className="cursor-pointer"
				/>
				<img
					width="21px"
					src="/images/converse_logo.svg"
					alt="converse logo"
					className="cursor-pointer"
				/>
			</div>
			<div className="flex px-5 self-center">
				<p
					className="cursor-pointer text-xs"
					onMouseEnter={handleMouseOverHelp}
					// onMouseLeave={handleMouseOut}
				>
					Help
				</p>
				{isHoveringHelp && (
					<HoverMenuForHelp
						handleMouseOut={handleMouseOutHelp}
						isHovered={isHoveringHelp}
					/>
				)}
				<div className="w-px h-3 bg-gray-400 mx-2"></div>
				<p className="cursor-pointer text-xs">Join us</p>
				<div className="w-px h-3 bg-gray-400 mx-2"></div>
				<p className="cursor-pointer text-xs">Sign In</p>
			</div>
		</div>
	);
};
export default FirstRow;

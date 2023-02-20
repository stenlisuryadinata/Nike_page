import React, { useState, useEffect, useRef } from 'react';
import Footer_Two from './Footer_pt2';
import { motion } from 'framer-motion';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { departments, FeaturedSection, ShoesSection } from './Footer_data';

import TopColumn from './Top_column';

const Footer = () => {
	const [width, setWidth] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	const [isFeaturedClicked, setIsFeaturedClicked] = useState(false);
	const [isShoesClicked, setIsShoesClicked] = useState(false);
	const [isClothingClicked, setIsClothingClicked] = useState(false);
	const [isKidsClicked, setIsKidsClicked] = useState(false);

	const refFeatured = useRef(null);

	useEffect(() => {
		const resizeListener = () => {
			setWidth(window.innerWidth);
		};
		resizeListener();
		window.addEventListener('resize', resizeListener);
		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, [width]);

	const featuredClick = () => {
		width < 640 && setClickedFeatured(!clickedFeatured);
		width < 640 && isShoesClicked && setIsShoesClicked(false);
		width < 640 && isClothingClicked && setIsClothingClicked(false);
		width < 640 && isKidsClicked && setIsKidsClicked(false);
	};

	const shoesClick = () => {
		width < 640 && setIsShoesClicked(!isShoesClicked);
		width < 640 && clickedFeatured && setClickedFeatured(false);
		width < 640 && isClothingClicked && setIsClothingClicked(false);
		width < 640 && isKidsClicked && setIsKidsClicked(false);
	};

	const clothingClick = () => {
		width < 640 && setClickedClothing(!isClothingClicked);
		width < 640 && isShoesClicked && setIsShoesClicked(false);
		width < 640 && clickedFeatured && setClickedFeatured(false);
		width < 640 && isKidsClicked && setIsKidsClicked(false);
	};

	const kidsClick = () => {
		setClickedKids(!clickedKids);
	};

	const ToggleHiddenMenu = () => {
		console.log('test toggle');
		setIsHovered(!isHovered);
	};

	return (
		<motion.div layout className="font-helvetica-neue-medium">
			<motion.div
				onPointerLeave={() => ToggleHiddenMenu()}
				layout
				className="sm:flex justify-between max-w-880 md:m-auto p-7 md:p-14"
			>
				<TopColumn
					width={width}
					department={FeaturedSection}
					title="Featured"
					isHovered={isHovered}
					setIsHovered={setIsHovered}
				/>

				<TopColumn
					width={width}
					department={ShoesSection}
					title="Shoes"
					isHovered={isHovered}
					setIsHovered={setIsHovered}
				/>

				<TopColumn
					width={width}
					department={ShoesSection}
					title="Shoes"
					isHovered={isHovered}
					setIsHovered={setIsHovered}
				/>

				<TopColumn
					width={width}
					department={ShoesSection}
					title="Shoes"
					isHovered={isHovered}
					setIsHovered={setIsHovered}
				/>
			</motion.div>

			<Footer_Two width={width} />
		</motion.div>
	);
};

export default Footer;

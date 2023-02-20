import React, { useState, useEffect } from 'react';
import Promo from './Promo';
import FirstRow from './FirstRow';
import Search from './Search';
import SearchOpened from './SearchOpened';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { HeaderHolderVariants } from './Header_framer_variants';
import HamburgerMenuIcon from './Hamburger_Menu_Icon';
import HamburgerMenuOpened from './Hamburger_Menu_Opened';
// import  HamburgerMenuOpened  from './Hamburger_Menu_Opened';
import Navbar from './Navbar/Navbar';

const Header = () => {
	const [width, setWidth] = useState(0);
	const [isHamburgerToggle, setIsHamburgerToggle] = useState(false);
	const [isSearchToggled, setIsSearchToggled] = useState(false);
	const [isScrolledY, setIsScrolledY] = useState(false);

	useEffect(() => {
		const resizeListener = () => {
			setWidth(window.innerWidth);
		};
		const scrolledY = () => {
			if (typeof window !== 'undefined') {
				window.addEventListener('scroll', () =>
					setIsScrolledY(window.pageYOffset > 0)
				);
				console.log('window is defined');
			}
		};
		resizeListener();
		scrolledY();
		window.addEventListener('resize', resizeListener);
		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, [width, isScrolledY]);

	return (
		<motion.div className="w-full">
			<FirstRow />
			{/* Second row: */}
			<motion.div className="py-2 px-6 lg:px-12 flex justify-between ">
				{/* Logo: */}
				<AnimatePresence>
					{!isSearchToggled && (
						<motion.div
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -40 }}
							transition={{ ease: 'easeInOut', duration: 0.2 }}
							layout
							className="w-14 flex"
						>
							<motion.img
								src="/nike-4-logo-svg-vector.svg"
								alt="nike-logo"
								className="self-center"
							/>
						</motion.div>
					)}
				</AnimatePresence>

				<Navbar />
				<motion.div className="flex ">
					<motion.div className="lg:order-2 w-9 h-9 hidden lg:flex mr-3 rounded-full hover:bg-nike-light-gray-bg-hovered">
						<FiHeart className="m-auto mt-2" size="1.4rem" />
					</motion.div>

					<motion.div className="lg:order-last self-center rounded-full mr-3 w-9 h-9 hover:bg-nike-light-gray-bg-hovered flex items-center justify-center items-start">
						<FiShoppingBag className="m-auto" size="1.4rem" />
					</motion.div>

					{isSearchToggled ? (
						<SearchOpened
							isSearchToggled={isSearchToggled}
							setIsSearchToggled={setIsSearchToggled}
						/>
					) : (
						<Search
							className="lg:order-first-1"
							isSearchToggled={isSearchToggled}
							setIsSearchToggled={setIsSearchToggled}
						/>
					)}

					{!isHamburgerToggle ? (
						<HamburgerMenuIcon
							isHamburgerToggle={isHamburgerToggle}
							setIsHamburgerToggle={setIsHamburgerToggle}
						/>
					) : (
						<HamburgerMenuOpened
							isHamburgerToggle={isHamburgerToggle}
							setIsHamburgerToggle={setIsHamburgerToggle}
						/>
					)}
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Header;

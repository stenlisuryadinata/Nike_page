import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import {
	HamburgerMenuBackground,
	HamburgerMenuSide,
} from './Header_framer_variants';
import { hamburgerSideMenu } from './Navbar/Header_Data';
import HamburgerMenuIcon from './Hamburger_Menu_Icon';
import Button_shop from '../ui/button_shop';
import useLockBodyScroll from '../../hooks/use-lock-body-scroll';

const HamburgerMenuOpened = (props) => {
	useLockBodyScroll();

	return (
		<AnimatePresence>
			<div className="fixed inset-0 z-10 flex justify-end">
				<motion.div
					variants={HamburgerMenuBackground}
					initial="initial"
					animate="animate"
					className="w-full h-screen backdrop-filter backdrop-blur-sm backdrop-contrast-100"
					onClick={() => props.setIsHamburgerToggle(!props.isHamburgerToggle)}
				/>
				<motion.div
					variants={HamburgerMenuSide}
					initial="initial"
					animate="animate"
					className="flex flex-col bg-white min-w-320 right-0 top-0 border overflow-scroll py-2"
					layout
				>
					<div className="px-6 relative flex justify-end">
						<HamburgerMenuIcon
							isHamburgerToggle={props.isHamburgerToggle}
							setIsHamburgerToggle={props.setIsHamburgerToggle}
						/>
					</div>
					<div className="px-9 flex flex-col">
						<motion.ul className="flex-shrink-0">
							{hamburgerSideMenu.map((department) => (
								<motion.li
									key={department.title}
									className="cursor-pointer whitespace-nowrap flex-shrink-0 mb-4 flex justify-between text-2xl"
								>
									{department.title}
									<IoIosArrowForward className="mt-2" size="1.2rem" />
								</motion.li>
							))}
						</motion.ul>
						<div className="flex mt-6 cursor-pointer">
							<img
								src="/images/jordan.svg"
								alt="jordan logo"
								width="25"
								className="mr-5"
							/>
							<p>Jordan</p>
						</div>
						<div className="flex mt-6 cursor-pointer">
							<img
								src="/images/converse_logo.svg"
								alt="converse logo"
								width="28"
								className="mr-4"
							/>
							<p>Converse</p>
						</div>
						<p className="text-xl text-nike-light-gray mt-24">
							Become a Nike Member for the best products, inspiration and
							stories in sport.{' '}
							<span className="text-nike-black">Learn more</span>
						</p>
					</div>
					<div className="pl-8 mt-4">
						<Button_shop
							title="Join Us"
							buttonColor="bg-black"
							buttonTextColor="white"
							styles="mr-4"
						/>
						<Button_shop
							title="Sign In"
							buttonColor="bg-white"
							styles="border"
						/>
					</div>
				</motion.div>
			</div>
		</AnimatePresence>
	);
};

export default HamburgerMenuOpened;

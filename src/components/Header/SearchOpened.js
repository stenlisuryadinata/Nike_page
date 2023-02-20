import React, { useRef, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { GrFormClose } from 'react-icons/gr';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import {
	SearchVariants,
	SearchInputVariants,
	PopularSearchVariants,
} from './Header_framer_variants';
import { popularSearch } from './Navbar/Header_Data';
import useLockBodyScroll from '../../hooks/use-lock-body-scroll';

const Search = ({
	isSearchToggled,
	setIsSearchToggled,
	isSearchSelectionToggled,
	forwardedReF,
}) => {
	const inputEl = useRef(null);

	const onButtonClick = () => {
		// `current` points to the mounted text input element
		inputEl.current.focus();
		inputEl.current.select();
	};

	setTimeout(() => {
		onButtonClick();
	}, 1);

	useLockBodyScroll();

	return (
		<AnimateSharedLayout>
			<AnimatePresence>
				<motion.div className="">
					<motion.div
						className="flex flex-col bg-white fixed inset-0 px-6 py-2 z-10 max-h-96"
						layout
						variants={SearchVariants}
					>
						<motion.div className="flex justify-end relative">
							<motion.input
								layout
								// ref={inputEl}
								ref={inputEl}
								variants={SearchInputVariants}
								animate={isSearchToggled ? 'opened' : 'closed'}
								className={`input pl-10 bg-nike-light-gray-bg border-none rounded-full`}
								type="text"
								placeholder="Search"
							/>
							<motion.div
								className="absolute max-w-0"
								initial={{ right: 2, top: 2, opacity: 0 }}
								animate={{ left: 9, top: 7, opacity: 1 }}
								transition={{
									duration: 0.4,
								}}
							>
								<FiSearch size="1.5rem" />
							</motion.div>
							<motion.button
								layout
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ type: 'spring', duration: 0.4, delay: 0.2 }}
								className="cursor-pointer bg-nike-light-gray-bg hover:bg-nike-light-gray-bg-hovered rounded-full p-2 ml-3"
								onClick={() => {
									setIsSearchToggled(!isSearchToggled);
								}}
							>
								<GrFormClose size="1.4rem" />
							</motion.button>
						</motion.div>

						<motion.div
							variants={PopularSearchVariants}
							initial="initial"
							animate="opened"
							className="ml-3"
						>
							<motion.h2
								className=" text-gray-700 mb-2 mt-12"
								onClick={onButtonClick}
							>
								Popular Search Terms
							</motion.h2>
							{popularSearch.map((term) => (
								<motion.p
									key={term.title}
									className="text-xl my-0.5 cursor-pointer"
									variants={PopularSearchVariants}
								>
									{term.title}
								</motion.p>
							))}
						</motion.div>
					</motion.div>
					<motion.div
						onClick={() => {
							setIsSearchToggled(false);
						}}
						className="w-screen h-full backdrop-filter backdrop-blur-sm backdrop-contrast-100 fixed bottom-0"
					/>
				</motion.div>
			</AnimatePresence>
		</AnimateSharedLayout>
	);
};

export default Search;

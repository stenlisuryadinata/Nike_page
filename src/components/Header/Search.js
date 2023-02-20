import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { SearchVariants } from './Header_framer_variants';

const Search = ({ isSearchToggled, setIsSearchToggled, forwardedReF }) => {
	return (
		<AnimateSharedLayout>
			<AnimatePresence>
				<motion.div
					layout
					className={`max-h-10 relative flex mr-3 lg:w-48 lg:bg-nike-light-gray-bg lg:hover:bg-nike-light-gray-bg-hovered lg:rounded-full`}
					onClick={() => {
						setIsSearchToggled(!isSearchToggled);
					}}
					// variants={SearchVariants}
					// animate={isSearchToggled ? 'opened' : 'closed'}
				>
					<motion.p className="hidden lg:flex absolute left-9 top-1.5 opacity-40">
						Search
					</motion.p>
					{isSearchToggled && (
						<motion.input
							layout
							className={`bg-nike-light-gray-bg border-none rounded-full max-h-6`}
							type="text"
							placeholder="Search to"
						/>
					)}

					<motion.button
						layout
						// ref={forwardedReF}
						className="w-9 h-9 hover:bg-nike-light-gray-bg-hovered rounded-full"
						onClick={() => {
							setIsSearchToggled(!isSearchToggled);
						}}
					>
						<FiSearch size="1.4rem" className="m-auto" />
					</motion.button>
				</motion.div>
			</AnimatePresence>
		</AnimateSharedLayout>
	);
};

export default Search;

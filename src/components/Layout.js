import React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer_main';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
// import Cart from "./Cart";

const Layout = (props) => {
	return (
		<AnimatePresence>
			<AnimateSharedLayout type="crossfade" className="overflow-hidden">
				<Header />
				{/* <Cart /> */}
				<div>{props.children}</div>
				<Footer />
			</AnimateSharedLayout>
		</AnimatePresence>
	);
};

export default Layout;

import React from 'react';
import { motion } from 'framer-motion';

import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im';
import { SiInstagram } from 'react-icons/si';

const SectionSocialMedia = () => {
	return (
		<motion.div className="flex my-8 sm:my-0 select-none">
			<motion.a
				layout
				href="#"
				className="bg-white mr-3 opacity-50 hover:opacity-100 rounded-full p-2 self-start"
			>
				<FaTwitter />
			</motion.a>
			<motion.a
				layout
				href="#"
				className="bg-white mr-3 opacity-50 hover:opacity-100 rounded-full p-2 self-start"
			>
				<FaFacebookF />
			</motion.a>
			<motion.a
				layout
				href="#"
				className="bg-white mr-3 opacity-50 hover:opacity-100 p-1 rounded-full self-start"
			>
				<ImYoutube2 size="1.5rem" />
			</motion.a>
			<motion.a
				layout
				href="#"
				className="bg-white mr-3 opacity-50 hover:opacity-100 rounded-full p-2 self-start"
			>
				<SiInstagram />
			</motion.a>
		</motion.div>
	);
};

export default SectionSocialMedia;

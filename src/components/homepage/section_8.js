import React from 'react';
import styles from './section_6.module.css';

const Section_Eight = (props) => {
	return (
		<div
			className={`mt-12 mb-16 flex ${styles.container} overflow-x-scroll smoothScrolling lg:grid lg:grid-cols-3 lg:gap-10`}
		>
			<div
				className={` ${styles.child} flex-shrink-0 w-2/3 lg:w-auto mr-6 lg:mr-0 smoothScrolling font-medium cursor-pointer`}
			>
				<div
					className="w-full h-72 bg-cover"
					style={{
						backgroundImage: `url(${props.props.response.results[1].urls.full})`,
					}}
				/>
				<p className="text-xl mt-5">Exclusive Nike Shopping Perks</p>
			</div>
			<div
				className={` ${styles.child} flex-shrink-0 w-2/3 lg:w-auto mr-6 lg:mr-0 smoothScrolling font-medium cursor-pointer`}
			>
				<div
					className="w-full h-72 bg-cover"
					style={{
						backgroundImage: `url(${props.props.response.results[14].urls.full})`,
					}}
				/>
				<p className="text-xl mt-5">First & Exclusive Access</p>
			</div>
			<div
				className={` ${styles.child} flex-shrink-0 w-2/3 lg:w-auto lg:mr-0 smoothScrolling font-medium cursor-pointer`}
			>
				<div
					className="w-full h-72 bg-cover"
					style={{
						backgroundImage: `url(${props.props.response.results[13].urls.full})`,
					}}
				/>
				<p className="text-xl mt-5">Member Rewards & Offers</p>
			</div>
		</div>
	);
};

export default Section_Eight;

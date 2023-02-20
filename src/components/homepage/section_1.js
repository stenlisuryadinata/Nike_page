import React from 'react';
import Button_shop from '../ui/button_shop';

const Section_One = (props) => {
	return (
		<div className="">
			<div
				className="h-screen max-h-450 md:max-h-550 bg-cover bg-center cursor-pointer flex "
				style={{
					backgroundImage: `url(${props.props.response.results[1].urls.full})`,
				}}
			>
				{/* Text part on desktop: */}
				<div className="hidden md:flex flex-col h-full pt-6 md:p-12 justify-end">
					<p className="uppercase md:text-white text-3xl md:text-5xl font-futura tracking-tighter">
						Yardrunners <br /> collection
					</p>
					<p className="my-5 md:text-white">
						Styles inspired by storied HBCUs and their <br /> trailblizing
						Yardrunner alums.
					</p>
					<Button_shop
						title="Shop"
						buttonColor="bg-white"
						buttonTextColor="black"
					/>
				</div>
			</div>
			{/* Text part on mobile: */}
			<div className="flex md:hidden flex-col h-full pt-6 md:p-12 justify-end">
				<p className="uppercase md:text-white text-3xl md:text-5xl font-futura tracking-tighter">
					Yardrunners <br /> collection
				</p>
				<p className="my-5 md:text-white">
					Styles inspired by storied HBCUs and their <br /> trailblizing
					Yardrunner alums.
				</p>
				<Button_shop
					title="Shop"
					buttonColor="bg-black"
					buttonTextColor="white"
				/>
			</div>
		</div>
	);
};

export default Section_One;

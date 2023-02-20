import React from 'react';
import Button_shop from '../ui/button_shop';

const Section_Two = (props) => {
	return (
		<div className="">
			<p className="text-2xl mt-16 mb-5">Featured Footwear</p>
			<div
				className="h-screen max-h-450 md:max-h-550 bg-cover cursor-pointer flex flex-col bg-center"
				style={{
					backgroundImage: `url(${props.props.response.results[5].urls.full})`,
				}}
			/>
			<div className="flex flex-col text-center py-9">
				<p className="text-6xl uppercase font-futura tracking-tighter mb-7">
					The best of airmax
				</p>
				<p>Shoes that are always forward-facing and future embracing.</p>
				<Button_shop
					styles="self-center my-6"
					title="Shop"
					buttonTextColor="white"
					buttonColor="bg-black"
				/>
			</div>
		</div>
	);
};

export default Section_Two;

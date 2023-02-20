import React from 'react';
import Image from 'next/image';
import Button_shop from '../ui/button_shop';

const Section_Five = (props) => {
	return (
		<div className="">
			<p className="text-2xl mt-16 mb-5">For Everybody, Everywhere</p>
			<div className="relative">
				<video
					// ref={vidRef}
					autoPlay
					src={require('../../../public/1057289005-preview.mp4')}
					type="video/mp4"
					loop
					muted
					style={{
						width: '100%',
					}}
				/>

				<div className="tablet:absolute left-9 bottom-0 mt-5 tablet:mb-8">
					<p className="uppercase text-5xl font-futura tablet:text-white tracking-tighter">
						Presenting <br />
						Nike Fleece
					</p>
					<p className="my-5 tablet:text-white">
						We all have to go sweats &amp; a fav hoodie, <br />
						but Nike Fleece is so much more.
					</p>
					<div>
						<Button_shop
							title="Shop"
							styles="mr-5 bg-black tablet:bg-white text-white tablet:text-black"
						/>
						<Button_shop
							title="Explore"
							styles="bg-black tablet:bg-white text-white tablet:text-black"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section_Five;

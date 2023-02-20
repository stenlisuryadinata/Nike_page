import React from 'react';
import Button_Shop from '../ui/button_shop';

const Section_Seven = () => {
	return (
		<div className="text-xl font-medium">
			<p className="text-2xl mt-16 mb-5">Members Benefits</p>
			<div className="w-full bg-nike-main-ad p-16">
				<img
					src="/nike-4-logo-svg-vector.svg"
					width="100"
					alt="nike logo"
					className="m-auto mb-10"
				/>
				<p className="text-center text-6xl mb-7 font-serif">
					Where All <br /> Athletes Belong
				</p>
				<p className="tablet:w-2/3 text-center font-normal tablet:m-auto">
					Things are better as a Nike Member. Get first and exclusive access to
					the newest styles & innovation, free shipping, birthday rewards and
					more.
				</p>
				<div className="flex justify-center mt-7">
					<Button_Shop
						buttonTextColor="white"
						buttonColor="bg-black"
						title="Join Us"
						styles="mr-3"
					/>
					<Button_Shop
						buttonTextColor="white"
						buttonColor="bg-black"
						title="Sign In"
					/>
				</div>
			</div>
		</div>
	);
};

export default Section_Seven;

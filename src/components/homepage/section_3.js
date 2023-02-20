import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button_shop from '../ui/button_shop';
import { createApi } from 'unsplash-js';

const Section_Three = () => {
	const [verticalImages, setVerticalImages] = useState(null);

	console.log(verticalImages);

	const unsplash = createApi({
		accessKey: process.env.NEXT_PUBLIC_ACCESS_KEY,
	});

	const fetchVerticalImages = async () => {
		await unsplash.search
			.getPhotos({
				query: 'nike runner',
				orientation: 'portrait',
				page: 1,
				perPage: 20,
			})
			.then((result) => {
				if (result.type === 'success') {
					setVerticalImages(result);
					console.log(result);
					console.log('fetched Vertical');
				}
			})
			.catch(() => {
				console.log('something went wrong w/ vertical');
			});
	};

	useEffect(() => {
		fetchVerticalImages();
	}, []);

	if (verticalImages === null) {
		return <div className="text-center">Loading...</div>;
	} else {
		return (
			<div className="">
				<p className="text-2xl mt-16 mb-5">Trending Now</p>
				<div className="lg:grid lg:grid-cols-2 lg:gap-4">
					<div className="relative h-screen max-h-450 md:max-h-550 border flex relative">
						<div className="w-full tablet:w-1/2 relative">
							<Image
								src={verticalImages.response.results[7].urls.full}
								layout="fill"
								objectFit="cover"
								alt="nike"
							/>
						</div>
						<div className="w-1/2 relative hidden tablet:flex">
							<Image
								src={verticalImages.response.results[11].urls.full}
								layout="fill"
								objectFit="cover"
								alt="nike"
							/>
						</div>
						<div className="absolute left-9 bottom-0">
							<p className="text-white text-xl">New Fits for Fall</p>
							<Button_shop
								styles="self-center my-6"
								title="Shop"
								buttonTextColor="black"
								buttonColor="bg-white"
							/>
						</div>
					</div>
					<div className="hidden lg:flex relative h-xxll border flex relative">
						<div className="w-full relative">
							<Image
								src={verticalImages.response.results[9].urls.full}
								layout="fill"
								objectFit="cover"
								alt="nike"
							/>
						</div>
						<div className="absolute left-9 bottom-0">
							<p className="text-white text-xl">New Fits for Fall</p>
							<Button_shop
								styles="self-center my-6"
								title="Shop"
								buttonColor="bg-white"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Section_Three;

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { createApi } from 'unsplash-js';
import Section_One from '../src/components/homepage/section_1';
import Section_Two from '../src/components/homepage/section_2';
import Section_Three from '../src/components/homepage/section_3';
import Section_Four from '../src/components/homepage/section_4';
import Section_Five from '../src/components/homepage/section_5';
import Section_Six from '../src/components/homepage/section_6';
import Section_Seven from '../src/components/homepage/section_7';
import Section_Eight from '../src/components/homepage/section_8';

export default function Home() {
	const [horizontalImages, setHorizontalImages] = useState(null);

	const unsplash = createApi({
		accessKey: process.env.NEXT_PUBLIC_ACCESS_KEY,
	});

	const fetchImages = async () => {
		await unsplash.search
			.getPhotos({
				query: 'sport',
				orientation: 'landscape',
				page: 1,
				perPage: 20,
				color: 'black_and_white',
			})
			.then((result) => {
				if (result.type === 'success') {
					setHorizontalImages(result);
					console.log('fetched Horizontal');
				}
			})
			.catch(() => {
				console.log('something went wrong');
			});
	};

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
		fetchImages();
		fetchVerticalImages();
	}, []);

	if (horizontalImages === null) {
		return <div className="text-center">Loading...</div>;
		// } else if (horizontalImages.errors && verticalImages.errors) {
		// 	return (
		// 		<div>
		// 			<div>{horizontalImages.errors[0]}</div>
		// 			<div>{verticalImages.errors[0]}</div>
		// 		</div>
		// 	);
	} else {
		return (
			<div className="flex flex-col">
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<main className="flex flex-col px-6 lg:px-12 font-helvetica-neue-medium-cond overflow-hidden">
					<Section_One props={horizontalImages} />
					<Section_Two props={horizontalImages} />
					<Section_Three />
					<Section_Four />
					<Section_Five props={horizontalImages} />
					<Section_Six />
					<Section_Seven />
					<Section_Eight props={horizontalImages} />
				</main>
			</div>
		);
	}
}

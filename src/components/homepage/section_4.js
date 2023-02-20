import React, { useEffect, useRef, useState } from 'react';
import { productsData } from '../../data/products_data';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import styles from './section_6.module.css';

const SectionFour = () => {
	const [hideButtonLeft, setHideButtonLeft] = useState(true);
	const [hideButtonRight, setHideButtonRight] = useState(false);
	const [sliderWidth, setSliderWidth] = useState(0);
	const itemContainer = useRef(null);
	const carouselContainer = useRef(null);

	const onHScroll = () => {
		const el = carouselContainer.current.scrollLeft;
		if (el > 0) {
			setHideButtonLeft(false);
		} else {
			setHideButtonLeft(true);
		}
		if (el < sliderWidth) {
			setHideButtonRight(false);
		} else {
			setHideButtonRight(true);
		}
	};

	useEffect(async () => {
		setSliderWidth(
			carouselContainer.current.scrollWidth -
				carouselContainer.current.offsetWidth
		);
	}, []);

	const scroll = (scrollOffset) => {
		carouselContainer.current.scrollLeft += scrollOffset;
	};

	return (
		<div className="mt-10">
			<div className="flex w-full justify-between">
				<h2 className="text-2xl mt-16 mb-5">The Latest and Greatest</h2>
				<div className="hidden tablet:flex">
					<button
						className={`bg-gray-200 rounded-full my-auto mr-5 p-2 ${
							!hideButtonLeft && `hover:bg-gray-300`
						} ${hideButtonLeft && `opacity-40 cursor-default`}`}
						// onClick={() => scroll(itemContainer.current.clientWidth)}
						onClick={() => scroll(-24 - itemContainer.current.scrollWidth)}
					>
						<MdKeyboardArrowLeft size="2rem" />
					</button>
					<button
						className={`bg-gray-200 rounded-full my-auto p-2 ${
							!hideButtonRight && `hover:bg-gray-300`
						}
						${hideButtonRight && `opacity-40 cursor-default`}`}
						// onClick={() => scroll(itemContainer.current.clientWidth)}
						onClick={() => scroll(24 + itemContainer.current.scrollWidth)}
					>
						<MdKeyboardArrowRight size="2rem" />
					</button>
				</div>
			</div>
			<motion.div>
				<motion.div
					ref={carouselContainer}
					className={`${styles.container} flex overflow-x-scroll smoothScrolling `}
					onScroll={() => onHScroll()}
				>
					{productsData.map((product) => {
						// const { product, itemContainer } = { ...props };
						return (
							<ItemCard
								product={product}
								key={product.id}
								itemContainer={itemContainer}
								className={``}
							/>
						);
					})}
				</motion.div>
			</motion.div>
		</div>
	);
};

export const ItemCard = (props) => {
	const { product, itemContainer } = { ...props };
	return (
		<motion.div
			layout
			className={`flex-shrink-0 h-auto w-2/3 md:w-300 min-h-300 min-w-300 mr-6 cursor-pointer ${styles.child}`}
			ref={itemContainer}
		>
			<div className="aspect-w-1 aspect-h-1">
				<img
					src={product.image}
					alt="item"
					className="mb-6 w-full md:max-w-300 md:max-h-300 object-cover object-center"
				/>
			</div>
			<div className="tablet:flex justify-between mb-10">
				<div className="">
					<p className="font-medium">{product.name}</p>
					<p className="">{product.department}</p>
				</div>
				<p>${product.price}</p>
			</div>
		</motion.div>
	);
};

export default SectionFour;

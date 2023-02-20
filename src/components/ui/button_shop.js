import React, { useEffect, useState } from 'react';

const Button_shop = (props) => {
	return (
		<button
			className={`${props.buttonColor} text-${props.buttonTextColor} whitespace-nowrap px-6 py-2 rounded-full max-w-min hover:opacity-80 ${props.styles}`}
		>
			{props.title}
		</button>
	);
};

export default Button_shop;

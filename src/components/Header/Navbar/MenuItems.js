import React, { useState } from 'react';
import Dropdown from './Dropdown';

const MenuItems = ({ menuItems, depthLevel }) => {
	const [dropdown, setDropdown] = useState(false);

	return (
		<li className="mr-5 cursor-pointer">
			{menuItems.submenu && (
				<>
					<button onMouseEnter={() => setDropdown((prev) => !prev)}>
						{menuItems.title}
					</button>
					<Dropdown submenus={menuItems.submenu} dropdown={dropdown} />
				</>
			)}
		</li>
	);
};

export default MenuItems;

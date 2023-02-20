import MenuItems from './MenuItems';

const Dropdown = ({ submenus }) => {
	return (
		<ul>
			{submenus.map((submenu, index) => (
				<li key={index}>
					<a href="/#">{submenu.title}</a>
				</li>
			))}
		</ul>
	);
};

export default Dropdown;

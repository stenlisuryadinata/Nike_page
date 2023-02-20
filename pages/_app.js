import 'tailwindcss/tailwind.css';
import '../public/styles/index.css';
import '../src/components/Header/Navbar/navbar.scss';

import Layout from '../src/components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;

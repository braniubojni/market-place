import React from 'react';
import { Helmet } from 'react-helmet';
import { Div } from './styled';

const HomePage: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>MAIN - MarketPlace</title>
			</Helmet>
			<h1>Home page</h1>
			{/* <Div /> */}
		</>
	);
};

export default HomePage;

import React from 'react';
import { Helmet } from 'react-helmet';
import { PageWrapper } from '@/App.styled';

const HomePage: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>MAIN - MarketPlace</title>
			</Helmet>
			<PageWrapper>Home page</PageWrapper>
			{/* <Div /> */}
		</>
	);
};

export default HomePage;

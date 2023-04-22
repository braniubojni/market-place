import { PageWrapper } from '@/App.styled'
import { Helmet } from 'react-helmet'


const ProductDetailsPage: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Product Details - MarketPlace</title>
			</Helmet>

			<PageWrapper>Product Details</PageWrapper>
		</>
	)
}

export default ProductDetailsPage
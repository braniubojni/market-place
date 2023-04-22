import { PageWrapper } from '@/App.styled';
import { Helmet } from 'react-helmet'


const AccountSettingsPage: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Account Settings - MarketPlace</title>
			</Helmet>
			<PageWrapper>Account Settings</PageWrapper>
		</>
	)
}

export default AccountSettingsPage;
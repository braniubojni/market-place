import { FC, lazy } from "react";
import { useLocation, Route, Navigate, Routes } from "react-router-dom";
import { paths, checkPathMatch } from './helpers';

const AccountSettingsPage = lazy(() => import('@/pages/AccountSettingsPage'))

const PrivateRoutes: FC = () => {
	const location = useLocation();

	const isMatch = checkPathMatch(location.pathname, paths);

	return (
		<Routes>
			<Route path={paths.accountSettings} element={<AccountSettingsPage />} />
			<Route path="*" element={!isMatch ? <Navigate to={paths.home} /> : null} />
		</Routes>
	)
}

export default PrivateRoutes
import { FC, lazy } from "react";
import { useLocation, Route, Navigate, Routes } from "react-router-dom";
import { paths, checkPathMatch } from './helpers';

const HomePage = lazy(() => import('@/pages/HomePage'))
const ProductDetailsPage = lazy(() => import('@/pages/ProductDetailsPage'))

const PublicRoutes: FC = () => {
	const location = useLocation();

	const isMatch = checkPathMatch(location.pathname, paths);
	return (
		<Routes>
			<Route path={paths.prodDetails} element={<ProductDetailsPage />} />
			<Route path={paths.home} element={<HomePage />} />
			<Route path="*" element={!isMatch ? <Navigate to={paths.home} /> : null} />
		</Routes>
	)
}

export default PublicRoutes
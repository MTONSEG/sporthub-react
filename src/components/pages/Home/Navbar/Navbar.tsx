import React from "react";
import './Navbar.scss';
import { useAppSelector } from "../../../../hooks/hooks";

import LinksNavbar from './LinksNavbar/LinksNavbar';
import Loading from '../../../ui/atoms/Loading/Loading';
const SubscriptionsNavbar = React.lazy(() => import('./SubscriptionsNavbar/SubscriptionsNavbar'));

interface PropsType {

}

const Navbar: React.FC<PropsType> = () => {
	const { login } = useAppSelector(state => state.header);

	return (
		<div className={`navbar`}>
			<LinksNavbar login={login} />
			<React.Suspense fallback={<Loading />}>
				<SubscriptionsNavbar login={login} />
			</React.Suspense>
		</div>
	)
}

export default Navbar;
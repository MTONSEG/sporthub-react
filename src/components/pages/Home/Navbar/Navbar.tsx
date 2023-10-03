import React from "react";
import './Navbar.scss';
import { useAppSelector } from "../../../../hooks/hooks";

const LinksNavbar = React.lazy(() => import('./LinksNavbar/LinksNavbar'));
const SubscriptionsNavbar = React.lazy(() => import('./SubscriptionsNavbar/SubscriptionsNavbar'));

interface PropsType {

}

const Navbar: React.FC<PropsType> = () => {
	const { login } = useAppSelector(state => state.header);

	return (
		<div className={`navbar`}>
			<LinksNavbar login={login} />
			<SubscriptionsNavbar login={login} />
		</div>
	)
}

export default Navbar;
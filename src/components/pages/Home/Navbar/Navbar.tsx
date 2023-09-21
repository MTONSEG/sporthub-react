import React from "react";
import './Navbar.scss';
import { useAppSelector } from "../../../../hooks/hooks";
import LinksNavbar from "./LinksNavbar/LinksNavbar";
import SubscriptionsNavbar from "./SubscriptionsNavbar/SubscriptionsNavbar";

interface PropsType {
	login?: boolean,
	float?: boolean
}

const Navbar: React.FC<PropsType> = ({ float }) => {
	const { login } = useAppSelector(state => state.header);

	return (
		<div className={`navbar ${float ? 'float' : ''}`}>
			<LinksNavbar login={login} />
			<SubscriptionsNavbar login={login} />
		</div>
	)
}

export default Navbar;
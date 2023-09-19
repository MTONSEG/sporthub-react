import React from "react";
import './Navbar.scss';
import { useAppSelector } from "../../../../hooks/hooks";
import LinksNavbar from "./LinksNavbar/LinksNavbar";
import SubscriptionsNavbar from "./SubscriptionsNavbar/SubscriptionsNavbar";

interface PropsType {
	login?: boolean
}

const Navbar = () => {
	const { login } = useAppSelector(state => state.header);

	return (
		<div className="navbar">
			<LinksNavbar login={login} />
			<SubscriptionsNavbar login={login} />
		</div>
	)
}

export default Navbar;
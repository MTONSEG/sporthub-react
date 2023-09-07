import React from "react";
import './Main.scss';
import Header from "../Header/Header";
import Logo from "../../ui/atoms/Logo/Logo";
import { Link } from "react-router-dom";
import { AUTH_ROUTE } from "../../../routes/routes";

const Main = () => {
	return (
		<div>
			<Header />
			<Link to={AUTH_ROUTE}>SingIn</Link>
		</div>
	)
}

export default Main;
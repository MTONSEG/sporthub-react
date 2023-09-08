import React from "react";
import './Main.scss';
import Header from "../Header/Header";
import Logo from "../../ui/atoms/Logo/Logo";
import { Link } from "react-router-dom";
import { AUTH_CHECK_ROUTE, AUTH_DATA_ROUTE, AUTH_FORGOT_ROUTE, AUTH_REG_ROUTE, AUTH_RESTORE_ROUTE, AUTH_ROUTE } from "../../../routes/routes";

const Main = () => {
	return (
		<div>
			<Header />
			<Link style={{fontSize: '40px'}} to={AUTH_ROUTE}>SingIn</Link>
			<Link style={{fontSize: '40px'}} to={AUTH_REG_ROUTE}>SingUp</Link>
			<Link style={{fontSize: '40px'}} to={AUTH_FORGOT_ROUTE}>Forogot</Link>
			<Link style={{fontSize: '40px'}} to={AUTH_CHECK_ROUTE}>Check</Link>
			<Link style={{fontSize: '40px'}} to={AUTH_RESTORE_ROUTE}>Restore</Link>
			<Link style={{fontSize: '40px'}} to={AUTH_DATA_ROUTE}>Data</Link>
		</div>
	)
}

export default Main;
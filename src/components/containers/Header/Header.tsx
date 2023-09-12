import React from "react";
import './Header.scss';
import Container from "../Container/Container";
import Logo from "../../ui/atoms/Logo/Logo";
import MenuHeader from "./MenuHeader/MenuHeader";

const Header = () => {
	return (
		<div className="header">
			<Container>
				<div className="header__row">
					<Logo />
					<MenuHeader/>
				</div>
			</Container>
		</div>
	)
}

export default Header;
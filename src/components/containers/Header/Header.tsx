import React, { useRef } from "react";
import './Header.scss';
import Container from "../Container/Container";
import Logo from "../../ui/atoms/Logo/Logo";
import MenuHeader from "./MenuHeader/MenuHeader";
import Burger from "../../ui/atoms/Burger/Burger";
import PopupMenuHeader from "./MenuHeader/PopupMenuHeader/PopupMenuHeader";

const Header:React.FC = () => {
	// const burgerRef = useRef<HTMLDivElement>();

	return (
		<div className="header">
			<Container>
				<div className="header__row">
					<Burger  />
					<Logo />
					<MenuHeader />
				</div>
			</Container>
		</div>
	)
}

export default Header;
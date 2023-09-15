import React from "react";
import './LinksNavbar.scss';
import { NavLink } from "react-router-dom";

interface PropsType {
	login?: boolean
}


const LinksNavbar: React.FC<PropsType> = ({ login }) => {

	return (
		<div className="LinksNavbar">
			<div className="LinksNavbar__links">
				<NavLink to=''></NavLink>
				<NavLink to=''></NavLink>
				{
					login
						? <NavLink to=''></NavLink>
						: <></>
				}
			</div>


		</div>
	)
}

export default LinksNavbar;
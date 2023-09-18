import React from "react";
import './LinksNavbar.scss';
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../../../hooks/hooks";

interface PropsType {
	login?: boolean
}


const LinksNavbar: React.FC<PropsType> = ({ login }) => {
	const { links } = useAppSelector(state => state.navbar);


	return (
		<div className={`links-navbar${login ? '' : 'logout'}`}>
			{
				links?.map(el => (
					<NavLink
						className='links-navbar__link'
						key={el.id}
						to={el.path}
					>{el.title}</NavLink>
				))
			}
		</div>
	)
}

export default LinksNavbar;
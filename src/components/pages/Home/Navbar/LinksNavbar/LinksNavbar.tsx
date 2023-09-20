import React from "react";
import './LinksNavbar.scss';
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../../../hooks/hooks";

interface PropsType {
	login?: boolean,
	display?: boolean
}


const LinksNavbar: React.FC<PropsType> = ({ login, display }) => {
	const { links } = useAppSelector(state => state.users);


	return (
		<div className={`links-navbar${login ? '' : 'logout'}${display? ' dnone':''}`}>
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
import React from "react";
import './LinksNavbar.scss';
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { toggleMenu } from '../../../../../redux/slices/header/headerSlice';

interface PropsType {
	login?: boolean,
	display?: boolean
}


const LinksNavbar: React.FC<PropsType> = ({ login, display }) => {
	const { links } = useAppSelector(state => state.users);
	const dispatch = useAppDispatch();

	return (
		<div className={`links-navbar${login ? '' : 'logout'}${display ? ' dnone' : ''}`}>
			{
				links?.map(el => (
					<NavLink
						className='links-navbar__link'
						key={el.id}
						to={el.path}
						onClick={(): void => { dispatch(toggleMenu()) }}
					>{el.title}</NavLink>
				))
			}
		</div>
	)
}

export default LinksNavbar;
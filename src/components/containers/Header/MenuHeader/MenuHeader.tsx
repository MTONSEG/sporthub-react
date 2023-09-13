import React, { CSSProperties, useEffect } from "react";
import './MenuHeader.scss';
import { Link, NavLink } from "react-router-dom";
import { Icon } from "../../../ui/atoms/Icon/Icon";
import { useAppSelector } from "../../../../hooks/hooks";
import { NOTIFY_ROUTE } from "../../../../routes/routes";
import { Button } from "../../../ui/atoms/Button/Button";
import UserMenuHeader from "./UserMenuHeader/UserMenuHeader";

interface MenuPropsType {

}

const MenuHeader: React.FC<MenuPropsType> = () => {
	const { login, links, titleBtn, activeMenu, ...data } = useAppSelector(state => state.header);
	const { currentUser } = useAppSelector(state => state.singin)
	const btnStyles: CSSProperties = {
		width: '120px'
	}

	return (
		<div className={`menu-header${login ? ' login' : ''}`}>
			<Link to={NOTIFY_ROUTE} className="menu-header__btn menu-header__btn_search">
				<Icon id="search" className="menu-header__icon-btn" />
			</Link>

			<div className={`menu-header__burger-menu${activeMenu ? ' active' : ''}`}>
				<Link to={data.notify.path} className="menu-header__btn menu-header__btn_notify">
					<Icon id={data.notify.iconID} className="menu-header__icon-btn" />
					<p className="menu-header__btn-text">{data.notify.title}</p>
				</Link>

				<ul className="menu-header__list">
					{
						links?.map(el => (
							<li
								key={el.id}
								className="menu-header__item">
								<NavLink to={el.path} className="menu-header__link">
									{el.title}
								</NavLink>
							</li>
						))
					}
				</ul>
				{
					login
						? <UserMenuHeader photoURL={currentUser.photoURL} name={currentUser.name} />
						: <Button
							path={titleBtn.path}
							style={btnStyles}
							className="menu-header__sing-btn"
						>{titleBtn.title}</Button>
				}


			</div>
		</div>
	)
}

export default MenuHeader;
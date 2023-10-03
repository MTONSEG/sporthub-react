import React from "react";
import './MenuHeader.scss';
import { Link, NavLink } from "react-router-dom";
import { Icon } from "../../../ui/atoms/Icon/Icon";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { NOTIFY_ROUTE } from "../../../../routes/routes";
import { Button } from "../../../ui/buttons/Button/Button";
import UserMenuHeader from "./UserMenuHeader/UserMenuHeader";
import { toggleHeaderPopup, toggleMenu } from "../../../../redux/slices/header/headerSlice";
import LinksNavbar from "../../../pages/Home/Navbar/LinksNavbar/LinksNavbar";
import SubscriptionsNavbar from "../../../pages/Home/Navbar/SubscriptionsNavbar/SubscriptionsNavbar";



const MenuHeader: React.FC = () => {
	const { login, links, titleBtn, activeMenu, ...data } = useAppSelector(state => state.header);
	const { currentUser } = useAppSelector(state => state.singin);
	const dispatch = useAppDispatch();

	const handleSingUp = () => {
		dispatch(toggleHeaderPopup())
	}

	return (
		<div className={`menu-header${login ? ' login' : ''}`}>
			<Link to={NOTIFY_ROUTE} className="menu-header__btn menu-header__btn_search">
				<Icon id="search" className="menu-header__icon-btn" />
			</Link>

			<div className={`menu-header__burger-menu${activeMenu ? ' active' : ''}`}>
				{
					window.innerWidth < 768
						? <LinksNavbar login={login} display={true} />
						: <></>
				}

				{
					login
						? <>
							<Link
								to={data.notify.path}
								className="menu-header__btn menu-header__btn_notify"
								onClick={(): void => { dispatch(toggleMenu()) }}
							>
								<Icon id={data.notify.iconID} className="menu-header__icon-btn" />
								<p className="menu-header__btn-text">{data.notify.title}</p>
							</Link>
							<ul className="menu-header__list">
								{
									links?.map(el => (
										<li
											key={el.id}
											className="menu-header__item">
											<NavLink
												to={el.path}
												className="menu-header__link"
												onClick={(): void => { dispatch(toggleMenu()) }}
											>
												{el.title}
											</NavLink>
										</li>
									))
								}
							</ul>
							<UserMenuHeader photoURL={currentUser.photoURL} name={currentUser.name} />
							<SubscriptionsNavbar login={login} display={true} />
						</>
						: <Button
							onClickHandler={handleSingUp}
							path={titleBtn.path}
							className="menu-header__sing-btn"
						>{titleBtn.title}</Button>
				}
			</div>

		</div >
	)
}

export default MenuHeader;
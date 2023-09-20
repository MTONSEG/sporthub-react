import React from "react";
import './PopupMenuHeader.scss';
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { Icon } from "../../../../ui/atoms/Icon/Icon";
import { getAuth, signOut } from "firebase/auth";
import { setLogin, toggleHeaderPopup } from "../../../../../redux/slices/header/headerSlice";
import { AUTH_ROUTE } from '../../../../../routes/routes';


const PopupMenuHeader: React.FC = () => {
	const { menuLinks, logout, activePopup } = useAppSelector(state => state.header);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleLogOut = () => {
		const auth = getAuth();
		signOut(auth).then(() => {
			dispatch(setLogin(false));
			navigate(AUTH_ROUTE)
		});
		localStorage.removeItem('sh-current');
	}

	return (
		<div className={`popup-header${activePopup ? ' active' : ''}`}
			onClick={() => { dispatch(toggleHeaderPopup()) }}>
			<div className="popup-header__wrapper">

				<div className="popup-header__list">
					{
						menuLinks?.map(el => (
							<Link key={el.id} to={el.path} className="popup-header__link">
								<Icon id={el.iconID} className="popup-header__icon" />
								<span>{el.title}</span>
							</Link>
						))
					}
				</div>

				<Link to={logout.path} className="popup-header__link popup-header__link_logout" onClick={handleLogOut}>
					<Icon id={logout.iconID} className="popup-header__icon" />
					<span>{logout.title}</span>
				</Link>

			</div>
		</div>
	)
}

export default PopupMenuHeader;
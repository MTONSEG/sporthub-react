import React from "react";
import './UserMenuHeader.scss';
import { Link } from "react-router-dom";
import PopupMenuHeader from "../PopupMenuHeader/PopupMenuHeader";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { toggleHeaderPopup } from "../../../../../redux/slices/header/headerSlice";
// import { useAppSelector } from "../../../../../hooks/hooks";


interface UserMenuPropsType {
	photoURL: string,
	name: string
}

const UserMenuHeader: React.FC<UserMenuPropsType> = ({ name, photoURL }) => {
	const { activePopup } = useAppSelector(state => state.header);
	const dispatch = useAppDispatch();

	return (
		<div className={`profile-header${activePopup ? ' active':''}`}
			onClick={() => { dispatch(toggleHeaderPopup()) }}
		>
			<div className="profile-header__avatar-wrap">
				<img src={photoURL} alt="" className="profile-header__avatar" />
			</div>
			<p className="profile-header__name">{name}</p>
			<PopupMenuHeader />
		</div>
	)
}

export default UserMenuHeader;
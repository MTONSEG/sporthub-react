import React, { useRef } from "react";
import './UserMenuHeader.scss';
import PopupMenuHeader from "../PopupMenuHeader/PopupMenuHeader";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { toggleHeaderPopup } from "../../../../../redux/slices/header/headerSlice";


interface UserMenuPropsType {
	photoURL: string,
	name: string
}

const UserMenuHeader: React.FC<UserMenuPropsType> = ({ name, photoURL }) => {
	const { activePopup } = useAppSelector(state => state.header);
	const dispatch = useAppDispatch();
	const popupRef = useRef<HTMLDivElement>()

	const handleOutClick = (e: MouseEvent | TouchEvent) => {
		if (activePopup && popupRef.current && !popupRef.current.contains(e.target as Node)) {
			dispatch(toggleHeaderPopup());
		}
	}

	return (
		<div ref={popupRef} className={`profile-header${activePopup ? ' active' : ''}`}
			onClick={() => { dispatch(toggleHeaderPopup()) }}
		>
			<div className="profile-header__avatar-wrap">
				<img src={photoURL} alt="" className="profile-header__avatar" />
			</div>
			<p className="profile-header__name">{name}</p>
			<PopupMenuHeader handleOutClick={handleOutClick} />
		</div>
	)
}

export default UserMenuHeader;
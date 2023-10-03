import React from "react";
import './SubscriberNavItem.scss';
import { USER_ROUTE } from "../../../../../../routes/routes";
import { NavLink } from "react-router-dom";
import { fetchUserInfo } from '../../../../../../redux/slices/userInfo/userInfoSlice';
import { useAppDispatch } from '../../../../../../hooks/hooks';
import { toggleMenu } from '../../../../../../redux/slices/header/headerSlice';


interface PropsType {
	imgSrc?: string,
	name: string,
	uid: string | number
}

const SubscriberNavItem: React.FC<PropsType> = ({ imgSrc, name, uid }) => {
	const dispatch = useAppDispatch();

	const handleOnClick = () => {
		dispatch(fetchUserInfo(uid));
		dispatch(toggleMenu())
	}

	return (
		<NavLink to={`${USER_ROUTE}/${uid}`} className="item-subscriber" onClick={handleOnClick}>
			<div className="item-subscriber__image-wrap">
				<img src={imgSrc} alt="" className="item-subscriber__image" />
			</div>
			<p className="item-subscriber__name">{name}</p>
		</NavLink>
	)
}

export default SubscriberNavItem;
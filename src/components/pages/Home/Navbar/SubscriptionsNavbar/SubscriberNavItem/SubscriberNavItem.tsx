import React, { useEffect } from "react";
import './SubscriberNavItem.scss';
import { NumStrNullType } from "../../../../../../redux/slices/auth/singupSlice";
import { PROFILE_ROUTE } from "../../../../../../routes/routes";
import { NavLink } from "react-router-dom";


interface PropsType {
	imgSrc?: string,
	name: string,
	uid: NumStrNullType
}

const SubscriberNavItem: React.FC<PropsType> = ({ imgSrc, name, uid }) => {


	return (
		<NavLink to={`${PROFILE_ROUTE}/${uid}`} className="item-subscriber">
			<div className="item-subscriber__image-wrap">
				<img src={imgSrc} alt="" className="item-subscriber__image" />
			</div>
			<p className="item-subscriber__name">{name}</p>
		</NavLink>
	)
}

export default SubscriberNavItem;
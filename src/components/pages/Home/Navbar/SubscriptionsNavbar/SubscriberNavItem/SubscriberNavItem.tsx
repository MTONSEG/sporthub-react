import React from "react";
import './SubscriberNavItem.scss';
import { USER_ROUTE } from "../../../../../../routes/routes";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from '../../../../../../hooks/hooks';
import { toggleMenu } from '../../../../../../redux/slices/header/headerSlice';
import { Icon } from '../../../../../ui/atoms/Icon/Icon';


interface PropsType {
	imgSrc?: string,
	name: string,
	uid: string | number
}

const SubscriberNavItem: React.FC<PropsType> = ({ imgSrc, name, uid }) => {
	const dispatch = useAppDispatch();

	const handleOnClick = () => {
		dispatch(toggleMenu())
	}

	return (
		<NavLink to={`${USER_ROUTE}/${uid}`} className="item-subscriber" onClick={handleOnClick}>
			<div className="item-subscriber__image-wrap">
				{
					imgSrc 
						? <img src={imgSrc} alt="" className="item-subscriber__image" />
						: <Icon id='user' className='item-subscriber__image-placeholder'/>
				}
				<img src={imgSrc} alt="" className="item-subscriber__image" />
			</div>
			<p className="item-subscriber__name">{name}</p>
		</NavLink>
	)
}

export default SubscriberNavItem;
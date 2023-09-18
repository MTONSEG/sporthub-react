import React, { useEffect } from "react";
import './SubscriberNavItem.scss';


interface PropsType {
	imgSrc?: string,
	name: string,
}

const SubscriberNavItem: React.FC<PropsType> = ({ imgSrc, name }) => {


	return (
		<div className="item-subscriber">
			<div className="item-subscriber__image-wrap">
				<img src={imgSrc} alt="" className="item-subscriber__image" />
			</div>
			<p className="item-subscriber__name">{name}</p>
		</div>
	)
}

export default SubscriberNavItem;
import React, { useEffect } from 'react';
import './ItemBioUser.scss';

type ItemBioUserPropsTyps = {
	title: string,
	text: string,
	strong?: boolean,
	className?: string,
}

const ItemBioUser: React.FC<ItemBioUserPropsTyps> = ({ title, text, strong, className }) => {

	return (
		<div className={className}>
			<p className='bio-item-title'>{title}</p>
			<p className={`bio-item-value${strong ? ' strong' : ''}`}>{text}</p>
		</div>
	)
}

export default ItemBioUser;
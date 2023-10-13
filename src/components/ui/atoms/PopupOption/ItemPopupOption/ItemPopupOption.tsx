import React from 'react';
import './ItemPopupOption.scss';
import { Link } from 'react-router-dom';

type ItemPopupOptionPropsType = {
	text: string,
	path?: string,
	handleClick?: () => void
}

const ItemPopupOption: React.FC<ItemPopupOptionPropsType> = ({
	text, path = '', handleClick
}) => {
	return (
		<li className='item-popup-option' onClick={handleClick}>
			<Link to={path} className='item-popup-option__link'>{text}</Link>
		</li>
	)
}

export default ItemPopupOption;
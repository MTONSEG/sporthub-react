import React from 'react';
import './ItemUserInfo.scss';
import { Icon } from '../../../../ui/atoms/Icon/Icon';

type ItemUserInfoType = {
	iconID: string,
	amount: number | string,
	text: string,
}

const ItemUserInfo: React.FC<ItemUserInfoType> = (props) => {
	return (
		<div className='item-info-subs'>
			<Icon id={props.iconID} className='item-info-subs__icon' />
			<div className="item-info-subs__body">
				<p className="item-info-subs__amount">{props.amount}</p>
				<p className="item-info-subs__text">{props.text}</p>
			</div>
		</div>
	)
}

export default ItemUserInfo;
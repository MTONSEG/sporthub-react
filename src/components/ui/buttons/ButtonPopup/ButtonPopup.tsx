import React from "react";
import './ButtonPopup.scss';
import { Icon } from '../../atoms/Icon/Icon';


type propsType = {
	disabled?: boolean,
	className?: string,
	handleClick?: () => void
}

export const ButtonPopup: React.FC<propsType> = ({
	disabled, className, handleClick
}) => {

	return (
		<div className={`popup-btn${disabled ? ' disable' : ''} ${className ? className : ''}`} onClick={handleClick}>
			<Icon id='points' className='popup-btn__icon' />
		</div>
	)
}

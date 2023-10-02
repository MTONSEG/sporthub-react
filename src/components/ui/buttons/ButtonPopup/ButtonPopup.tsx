import React, { CSSProperties, MouseEventHandler } from "react";
import './ButtonPopup.scss';
import icon from '../../../../assets/icons/popup-btn-points.svg';


type propsType = {
	disabled: boolean,
	handleClick: () => void
}

export const ButtonPopup: React.FC<propsType> = ({
	disabled, handleClick
}) => {

	return (
		<div className={`popup-btn${disabled ? ' disable' : ''}`} onClick={handleClick}>
			<img src={icon} alt="" className='popup-btn__icon' />
		</div>
	)
}

import React, { CSSProperties, MouseEventHandler } from "react";
import './ButtonPopup.scss';
import icon from '../../../../assets/icons/popup-btn-points.svg';


type propsType = {
	handleClick: () => void
}

export const ButtonPopup: React.FC<propsType> = ({
	handleClick
}) => {

	return (
		<div className="popup-btn" onClick={handleClick}>
			<img src={icon} alt="" className='popup-btn__icon' />
		</div>
	)
}

import React from 'react';
import './OptionButton.scss';
import { Icon } from '../../atoms/Icon/Icon';

type OptionButtonPropsType = {
	className: string,
	handleClick?: () => void
}

const OptionButton: React.FC<OptionButtonPropsType> = ({
	handleClick, className
}) => {
	return (
		<button className={`option-btn ${className ? className : ''}`} onClick={handleClick}>
			<Icon id='points' className='option-btn__icon' />
		</button>
	)
}

export default OptionButton;
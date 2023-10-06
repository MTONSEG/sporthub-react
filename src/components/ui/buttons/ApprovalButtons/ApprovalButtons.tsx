import React from 'react';
import './ApprovalButtons.scss';
import { Icon } from '../../atoms/Icon/Icon';

type ApprovalButtonsPropsType = {
	className: string
	amountLike: number,
	amountDislike: number,
	handleLike: () => void;
	handleDislike: () => void;
}

const ApprovalButtons: React.FC<ApprovalButtonsPropsType> = ({
	className, amountLike, amountDislike, handleLike, handleDislike
}) => {
	return (
		<div className={`approval-buttons ${className ? className : ''}`}>
			<button
				onClick={handleLike}
				className={`approval-buttons__btn approval-buttons__btn_like`}>
				<Icon id='approval' className='approval-buttons__btn-icon reverse' />
				<span>{amountLike}</span>
			</button>
			<button
				onClick={handleDislike}
				className={`approval-buttons__btn approval-buttons__btn_dislike`}>
				<Icon id='approval' className='approval-buttons__btn-icon' />
				<span>{amountDislike}</span>
			</button>
		</div>
	)
}

export default ApprovalButtons;
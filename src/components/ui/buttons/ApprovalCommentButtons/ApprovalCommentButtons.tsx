import React from 'react';
import './ApprovalCommentButtons.scss';
import { Icon } from '../../atoms/Icon/Icon';

type ApprovalCommentButtonsPropsType = {
	like: number,
	dislike: number
}

const ApprovalCommentButtons: React.FC<ApprovalCommentButtonsPropsType> = ({
	like, dislike
}) => {
	return (
		<div className='approval-comment'>
			<button className='approval-comment__btn like'>
				<Icon id='approval' className='approval-comment__btn-icon reverse' />
				<span>{like ? like : 0}</span>
			</button>
			<button className='approval-comment__btn dislike'>
				<Icon id='approval' className='approval-comment__btn-icon' />
				<span>{dislike ? dislike : 0}</span>
			</button>
		</div>
	)
}

export default ApprovalCommentButtons;
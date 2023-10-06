import React from 'react';
import './CommentButton.scss';
import { Icon } from '../../atoms/Icon/Icon';

type CommentButtonPropsType = {
	className: string,
	title: string,
	handleClick?: () => void
}

const CommentButton: React.FC<CommentButtonPropsType> = ({
	title, handleClick, className
}) => {
	return (
		<button className={`comment-btn ${className ? className : ''}`} onClick={handleClick}>
			<Icon id='comment' className='comment-btn__icon' />
			<span>{title}</span>
		</button>
	)
}

export default CommentButton;
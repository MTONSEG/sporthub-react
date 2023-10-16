import React from 'react';
import './CommentButton.scss';
import { Icon } from '../../atoms/Icon/Icon';

type CommentButtonPropsType = {
	className?: string,
	title: number,
	show:boolean,
	handleClick?: () => void
}

const CommentButton: React.FC<CommentButtonPropsType> = ({
	title, handleClick, className,show
}) => {
	return (
		<button className={`comment-btn ${className ? className : ''} ${show ?'show': ''}`} onClick={handleClick}>
			<Icon id='comment' className='comment-btn__icon' />
			<span>{title}</span>
		</button>
	)
}

export default CommentButton;
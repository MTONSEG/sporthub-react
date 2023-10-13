import React from 'react';
import './CommentsItem.scss';
import ApprovalCommentButtons from '../../../../../ui/buttons/ApprovalCommentButtons/ApprovalCommentButtons';
import { Comment } from '../../../../../../redux/slices/video/videoSlice';
import { Icon } from '../../../../../ui/atoms/Icon/Icon';

type CommentsItemPropsType = {
	name: string,
	photoURL: string,
	comment: string,
	like: number,
	dislike: number
}

const CommentsItem: React.FC<CommentsItemPropsType> = ({
	photoURL, name, comment, like, dislike
}) => {

	console.log(like,dislike);
	
	return (
		<div className='item-comments'>
			<div className="item-comments__header">
				<div className="item-comments__photo-wrap">
					{
						photoURL
							? <img src={photoURL} alt="" className="item-comments__photo" />
							: <Icon id='user' className='item-comments__photo-placeholder' />
					}

				</div>
				<h3 className="item-comments__name">
					{name}
				</h3>
			</div>
			<div className="item-comments__body">
				<p className="item-comments__comment">
					{comment}
				</p>
				<ApprovalCommentButtons like={like} dislike={dislike} />
			</div>
		</div>
	)
}

export default CommentsItem;
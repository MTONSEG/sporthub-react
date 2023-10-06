import React from 'react';
import './BodyViewVideo.scss';
import ApprovalButtons from '../../../../ui/buttons/ApprovalButtons/ApprovalButtons';
import CommentButton from '../../../../ui/buttons/CommentButton/CommentButton';
import OptionButton from '../../../../ui/buttons/OptionButton/OptionButton';

type BodyViewVideoPropsType = {
	title: string,
	amountViews: number,
	date: string,
	description: string
}

const BodyViewVideo: React.FC<BodyViewVideoPropsType> = ({
	title, amountViews, date, description
}) => {
	return (
		<div className='body-view-video'>
			<h2 className="body-view-video__title">
				{title}
			</h2>
			<div className="body-view-video__rating">
				<ApprovalButtons
					className='body-view-video__approval-btn'
					amountDislike={33}
					amountLike={334}
					handleDislike={() => { }}
					handleLike={() => { }} />
				<CommentButton
					className='body-view-video__comment-btn'
					title='text' />

				<div className="body-view-video__info">
					<p className="body-view-video__info-item">
						{amountViews} views
					</p>
					<p className="body-view-video__info-item">
						{date}
					</p>
				</div>

				<OptionButton
					className='body-view-video__option-btn'
					handleClick={() => { }} />
			</div>
			<p className='body-view-video__description'>
				{description}
			</p>
		</div>
	)
}

export default BodyViewVideo;
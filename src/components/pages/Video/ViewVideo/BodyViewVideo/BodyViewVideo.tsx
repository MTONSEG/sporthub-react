import React, { useEffect } from 'react';
import './BodyViewVideo.scss';
import ApprovalButtons from '../../../../ui/buttons/ApprovalButtons/ApprovalButtons';
import CommentButton from '../../../../ui/buttons/CommentButton/CommentButton';
import OptionButton from '../../../../ui/buttons/OptionButton/OptionButton';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { addViewsVideo, dislikeVideo, likeVideo, setLikeVideo } from '../../../../../redux/slices/video/videoSlice';
import { useParams } from 'react-router-dom';

type BodyViewVideoPropsType = {
	title: string,
	amountViews: number,
	date: string,
	description: string,
	showComments?: boolean,
	setShowComments: Function,
	like: number,
	dislike: number,
	videoUID: string | number
}

const BodyViewVideo: React.FC<BodyViewVideoPropsType> = ({
	title, amountViews, date, description, showComments, setShowComments, like, dislike, videoUID
}) => {
	const { commentList } = useAppSelector(state => state.videos);
	const dispatch = useAppDispatch();
	const { id } = useParams();

	const handleShowComments = (): void => { setShowComments(!showComments) };
	const handleLike = (): void => {dispatch(likeVideo(videoUID))}
	const handleDislike = (): void => {dispatch(dislikeVideo(videoUID)) }

	useEffect((): void => {
		dispatch(addViewsVideo(videoUID));
	},[id])

	return (
		<div className='body-view-video'>
			<h2 className="body-view-video__title">
				{title}
			</h2>
			<div className="body-view-video__rating">
				<ApprovalButtons
					className='body-view-video__approval-btn'
					amountDislike={dislike ? dislike : 0}
					amountLike={like ? like : 0}
					handleDislike={handleDislike}
					handleLike={handleLike} />
				<CommentButton
					className='body-view-video__comment-btn'
					show={showComments}
					title={commentList ? commentList.length : 0}
					handleClick={handleShowComments}
				/>

				<div className="body-view-video__info">
					<p className="body-view-video__info-item">
						{amountViews ? amountViews : 0} views
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
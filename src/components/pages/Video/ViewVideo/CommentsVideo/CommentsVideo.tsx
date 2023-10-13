import React, { useEffect } from 'react';
import './CommentsVideo.scss';
import { Title } from '../../../../ui/atoms/Title/Title';
import Textarea from '../../../../ui/forms/Textarea/Textarea';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { getVideoComments, setCommentVideoValue, setVideoComment } from '../../../../../redux/slices/video/videoSlice';
import { Button } from '../../../../ui/buttons/Button/Button';
import Container from '../../../../containers/Container/Container';
import CommentsList from './CommentsList/CommentsList';
import { useParams } from 'react-router-dom';
import Loading from '../../../../ui/atoms/Loading/Loading';

type CommentsVideoPropsType = {}

const CommentsVideo: React.FC<CommentsVideoPropsType> = () => {
	const { commentField, commentList, ...state } = useAppSelector(state => state.videos);
	const { id } = useParams();
	const dispatch = useAppDispatch();

	const handleSendComment = () => {
		dispatch(setVideoComment(id));
	}

	useEffect(() => {
		dispatch(getVideoComments(id));
	}, [])

	return (
		<div className='comments-video'>
			<Title
				className='comments-video__title'
				text={`0 ${state.titleComments}`}
			/>
			<div className="comments-video__enter-text">
				<Textarea
					className='comments-video__textarea'
					value={commentField.value}
					placeholder={commentField.placeholder}
					setStateValue={setCommentVideoValue}
				/>
				<Button
					onClickHandler={handleSendComment}
					className='comments-video__btn'>{state.titleSendBtn}</Button>
			</div>

			<CommentsList
				list={commentList}
				videoUID={id} />
		</div>
	)
}

export default CommentsVideo;
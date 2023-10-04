import React, { useEffect } from 'react';
import './VideoItem.scss';
import {useAppSelector } from '../../../hooks/hooks';
import { VideoFileType } from '../../../redux/slices/video/videoSlice';
import { getCreateDate } from '../../../redux/slices/auth/getCreateDate';

interface IVideoItem {
	video: VideoFileType
}

const VideoItem: React.FC<IVideoItem> = ({
	video
}) => {
	const user = useAppSelector(state => state.singin.currentUser)

	useEffect(() => {

	}, [])

	return (
		<div className={`video-item`}>
			<div className="video-item__poster-wrap">
				{
					video.posterURL
						? <img src={video.posterURL} alt="" className='video-item__poster' />
						: <></>
				}
			</div>
			<div className="video-item__body">
				<h3 className="video-item__title">{video.title}</h3>
				<div className="video-item__footer">
					<div className="video-item__author">
						<div className="video-item__author-photo-wrap">
							<img src={video.author.photoURL} alt={''} className="video-item__author-photo" />
						</div>
						<p className="video-item__author-name">
							{video.author.name}
						</p>
					</div>
					<p className="video-item__date">
						{getCreateDate(video.created)}
					</p>
				</div>
			</div>
		</div>
	)
}

export default VideoItem;
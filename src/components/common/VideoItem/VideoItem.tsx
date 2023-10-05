import React from 'react';
import './VideoItem.scss';
import { VideoFileType, setPreviewPath } from '../../../redux/slices/video/videoSlice';
import { getCreateDate } from '../../../redux/slices/auth/getCreateDate';
import { NumStrNullType } from '../../../redux/slices/auth/singupSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { ITEM_VIDEO_ROUTE } from '../../../routes/routes';
import { useAppDispatch } from '../../../hooks/hooks';

interface IVideoItem {
	video: VideoFileType,
	authorView?: boolean
}

const VideoItem: React.FC<IVideoItem> = ({
	video, authorView
}) => {
	const navigate = useNavigate();
	const {pathname} = useLocation();
	const dispatch = useAppDispatch();

	const handleClick = (uid: NumStrNullType): void => {
		navigate(`${ITEM_VIDEO_ROUTE}/${uid}`);
		dispatch(setPreviewPath(pathname));
	}

	return (
		<div className={`video-item`} onClick={() => { handleClick(video.uid) }}>
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
					{
						authorView
							? (
								<div className="video-item__author">
									<div className="video-item__author-photo-wrap">
										<img src={video.author.photoURL} alt={''} className="video-item__author-photo" />
									</div>
									<p className="video-item__author-name">
										{video.author.name}
									</p>
								</div>
							)
							: <></>
					}

					<p className="video-item__date">
						{getCreateDate(video.created)}
					</p>
				</div>
			</div>
		</div>
	)
}

export default VideoItem;
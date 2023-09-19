import React from 'react';
import './VideoItem.scss';
import Picture from 'components/ui/atoms/Picture/Picture';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';

interface IVideoItem {
	title?: string,
	date?: string,
	poster?: string,
	photo?: string,
	name?: string
}

const VideoItem: React.FC<IVideoItem> = ({
	title, date, poster, photo, name
}) => {
	const user = useAppSelector(state => state.singin.currentUser)

	console.log(user);

	return (
		<div className={`video-item`}>
			<div className="video-item__image-wrap">
				{/* <Picture img=''/> */}
			</div>
			<div className="video-item__body">
				<h3 className="video-item__title">{title}</h3>
				<div className="video-item__footer">
					<div className="video-item__author">
						<div className="video-item__author-photo-wrap">
							<img src={photo} alt={name} className="video-item__author-photo" />
						</div>
						<p className="video-item__author-name">{name}</p>
					</div>
					<p className="video-item__date">
						{date}
					</p>
				</div>
			</div>
		</div>
	)
}

export default VideoItem;
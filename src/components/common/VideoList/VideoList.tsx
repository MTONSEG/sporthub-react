import React from 'react';
import './VideoList.scss';
import { Title } from '../../ui/atoms/Title/Title';
import VideoItem from '../VideoItem/VideoItem';
import { VideoFileType } from '../../../redux/slices/video/videoSlice';
import { useAppSelector } from '../../../hooks/hooks';
import { getUserUID } from '../../../utils/getUserUID';

interface IVideoList {
	title?: string,
	videos?: VideoFileType[],
	authorView?: boolean
}

const VideoList: React.FC<IVideoList> = ({ title, videos, authorView }) => {
	const { users } = useAppSelector(state => state.users);


	return (
		<>
			<Title text={title} />
			<div className={'video-list'}>
				{
					videos
						? videos.map((el, index) => (
							<VideoItem
								key={index}
								video={el}
								user={users[el.author]}
								authorView={authorView} />
						))
						: <></>

				}
			</div>
		</>
	)
}

export default VideoList;
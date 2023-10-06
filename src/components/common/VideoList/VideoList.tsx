import React from 'react';
import './VideoList.scss';
import { Title } from '../../ui/atoms/Title/Title';
import VideoItem from '../VideoItem/VideoItem';
import { VideoFileType } from '../../../redux/slices/video/videoSlice';

interface IVideoList {
	title?: string,
	videos?: VideoFileType[],
	authorView?: boolean
}

const VideoList: React.FC<IVideoList> = ({ title, videos,authorView }) => {

	return (
		<>
			<Title text={title} />
			<div className={'video-list'}>
				{
					videos
						? videos.map((el, index) => (
							<VideoItem key={index} video={el} authorView={authorView} />
						))
						: <></>

				}
			</div>
		</>
	)
}

export default VideoList;
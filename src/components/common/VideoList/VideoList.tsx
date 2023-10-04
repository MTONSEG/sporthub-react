import React, { CSSProperties, ReactElement, useEffect } from 'react';
import './VideoList.scss';
import { Title } from '../../ui/atoms/Title/Title';
import VideoItem from '../VideoItem/VideoItem';
import { useAppSelector } from '../../../hooks/hooks';
import { VideoFileType } from '../../../redux/slices/video/videoSlice';

interface IVideoList {
	title?: string,
	videos?: VideoFileType[]
}

const VideoList: React.FC<IVideoList> = ({ title, videos }) => {
	const { ...state } = useAppSelector(state => state.videoList);

	useEffect((): void => {
		

	}, [])
	return (
		<>
			<Title text={title} />
			<div className={'video-list'}>
				{/* <VideoItem
					title='Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...'
					date='3 day ago'
					name='klusha lolegova'

				/> */}
				{
					videos
						? videos.map((el, index) => (
							<VideoItem key={index} video={el} />
						))
						: <></>

				}
			</div>
		</>
	)
}

export default VideoList;
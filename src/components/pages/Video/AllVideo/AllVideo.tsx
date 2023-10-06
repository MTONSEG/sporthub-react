import React, { useEffect } from 'react';
import './AllVideo.scss';
import VideoList from '../../../common/VideoList/VideoList';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import Loading from '../../../ui/atoms/Loading/Loading';
import { getUserUID } from '../../../../utils/getUserUID';
import {  getVideos, sortVideoList } from '../../../../redux/slices/video/videoSlice';

const AllVideo: React.FC = () => {
	const { videosList } = useAppSelector(state => state.videos);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getVideos('sort'));
		dispatch(sortVideoList());
	}, [])

	return (
		<div className='all-video'>
			<VideoList
				videos={videosList} />
		</div>
	)
}

export default AllVideo;
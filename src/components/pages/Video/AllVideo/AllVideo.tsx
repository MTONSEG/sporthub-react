import React, { useEffect } from 'react';
import './AllVideo.scss';
import VideoList from '../../../common/VideoList/VideoList';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import Loading from '../../../ui/atoms/Loading/Loading';
import { getUserUID } from '../../../../redux/slices/auth/getUserUID';
import { fetchUserVideos } from '../../../../redux/slices/video/videoSlice';

const AllVideo: React.FC = () => {
	const { videosUserList } = useAppSelector(state => state.videos);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUserVideos(getUserUID().uid));
	}, [])

	// if (!users) return <Loading />

	return (
		<div className='all-video'>
			<VideoList
				videos={videosUserList} />
		</div>
	)
}

export default AllVideo;
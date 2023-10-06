import React, { useEffect } from 'react';
import './BodyUserTabs.scss';
import { Route, Routes, useParams } from 'react-router-dom';
import Loading from '../../../../ui/atoms/Loading/Loading';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { getVideos } from '../../../../../redux/slices/video/videoSlice';

const VideoList = React.lazy(() => import('../../../../common/VideoList/VideoList'));
const BioUser = React.lazy(() => import('./BioUser/BioUser'));
const StoreUser = React.lazy(() => import('./StoreUser/StoreUser'));
const PlaylistsUser = React.lazy(() => import('./PlaylistsUser/PlaylistsUser'));

const BodyUserTabs: React.FC = () => {
	const { videosList } = useAppSelector(state => state.videos);
	const dispatch = useAppDispatch();
	const { uid } = useParams();

	useEffect(() => {
		dispatch(getVideos('all'));
	}, [])

	return (
		<div className='body-user-tabs'>
			<React.Suspense fallback={<Loading />}>
				<Routes>
					<Route index element={<VideoList videos={videosList} />} />
					<Route path='bio' element={<BioUser />} />
					<Route path='store' element={<StoreUser />} />
					<Route path='playlist' element={<PlaylistsUser />} />
					<Route path='*' element={<VideoList />} />
				</Routes>
			</React.Suspense>
		</div>
	)
}

export default BodyUserTabs;
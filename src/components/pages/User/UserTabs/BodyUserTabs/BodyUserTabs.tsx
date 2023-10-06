import React, { useEffect } from 'react';
import './BodyUserTabs.scss';
import { useParams } from 'react-router-dom';
import Loading from '../../../../ui/atoms/Loading/Loading';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { getVideos } from '../../../../../redux/slices/video/videoSlice';

const VideoList = React.lazy(() => import('../../../../common/VideoList/VideoList'));
const BioUser = React.lazy(() => import('./BioUser/BioUser'));
const StoreUser = React.lazy(() => import('./StoreUser/StoreUser'));
const PlaylistsUser = React.lazy(() => import('./PlaylistsUser/PlaylistsUser'));

const BodyUserTabs: React.FC = () => {
	const { videosList } = useAppSelector(state => state.videos);
	const { tabValue } = useAppSelector(state => state.userInfo);
	const { uid } = useParams();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getVideos(uid));
	}, [uid])
	console.log(tabValue);
	return (
		<div className='body-user-tabs'>
			<React.Suspense fallback={<Loading />}>
				{
					tabValue === 'video'
						? <VideoList videos={videosList} />
						: <></>
				}
				{
					tabValue === 'bio'
						? <BioUser userUID={uid} />
						: <></>
				}
				{
					tabValue === 'store'
						? <StoreUser />
						: <></>
				}
				{
					tabValue === 'playlist'
						? <PlaylistsUser />
						: <></>
				}
			</React.Suspense>
		</div>
	)
}

export default BodyUserTabs;
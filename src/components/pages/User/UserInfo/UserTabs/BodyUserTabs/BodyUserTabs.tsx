import React from 'react';
import './BodyUserTabs.scss';
import { Route, Routes } from 'react-router-dom';
import Loading from '../../../../../ui/atoms/Loading/Loading';

const VideosUser = React.lazy(() => import('./VideosUser/VideosUser'));
const BioUser = React.lazy(() => import('./BioUser/BioUser'));
const StoreUser = React.lazy(() => import('./StoreUser/StoreUser'));
const PlaylistsUser = React.lazy(() => import('./PlaylistsUser/PlaylistsUser'));

const BodyUserTabs: React.FC = () => {
	return (
		<div className='body-user-tabs'>
			<React.Suspense fallback={<Loading/>}>
				<Routes>
					<Route index element={<VideosUser />} />
					<Route path='bio' element={<BioUser />} />
					<Route path='store' element={<StoreUser />} />
					<Route path='playlist' element={<PlaylistsUser />} />
					<Route path='*' element={<VideosUser />} />
				</Routes>
			</React.Suspense>
		</div>
	)
}

export default BodyUserTabs;
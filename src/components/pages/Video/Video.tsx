import React, { useEffect } from 'react';
import './Video.scss';
import { Route, Routes } from 'react-router-dom';
import Loading from '../../ui/atoms/Loading/Loading';
import HeaderTabs from '../../common/HeaderTabs/HeaderTabs';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import ContainerProfile from '../../containers/ContainerProfile/ContainerProfile';
import { UserTabPathTypes } from '../../../redux/slices/userInfo/userInfoSlice';
import { Button } from '../../ui/buttons/Button/Button';
import plusIcon from '../../../assets/icons/plus.svg';
import { ADD_VIDEO_ROUTE } from '../../../routes/routes';
import { Link } from 'react-router-dom';
import { setActiveVideoLink, setVideoTabValue, sortVideoList } from '../../../redux/slices/video/videoSlice';

const AllVideo = React.lazy(() => import('./AllVideo/AllVideo'));
const PlaylistVideo = React.lazy(() => import('./PlaylistVideo/PlaylistVideo'));
const ViewVideo = React.lazy(() => import('./ViewVideo/ViewVideo'));

const Video: React.FC = () => {
	const dispatch = useAppDispatch();
	const { tabList, linkList, videoTabValue, ...state } = useAppSelector(state => state.videos);

	const handleTabCLick = (value: UserTabPathTypes): void => {
		dispatch(setVideoTabValue(value));
		dispatch(sortVideoList());
	}

	return (
		<ContainerProfile>
			<div className='video'>
				<div className="video__head">
					<div className="video__link-list">
						{
							linkList?.map(el => (
								<Link
									className={`video__link${el.active ? ' active' : ''}`}
									key={el.id}
									to={el.path}
									onClick={() => { dispatch(setActiveVideoLink(el.id)) }}
								>
									{el.title}
								</Link>
							))
						}
					</div>
					<Button path={ADD_VIDEO_ROUTE} className='video__add-btn'>
						<img src={plusIcon} alt='' className='video__plus-icon' />
						<span>{state.titleAddVideo}</span>
					</Button>
				</div>

				<HeaderTabs
					tabValue={videoTabValue}
					tabList={tabList}
					tabWidth={90}
					tabMobWidth={true}
					handlerTabClick={handleTabCLick}
				/>

				<div className="video__body">
					<React.Suspense fallback={<Loading />}>
						<Routes>
							<Route index element={<AllVideo />} />
							<Route path='playlist' element={<PlaylistVideo />} />
						</Routes>
					</React.Suspense>
				</div>
			</div>
		</ContainerProfile>
	)
}

export default Video;
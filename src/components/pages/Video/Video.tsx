import React, { useEffect } from 'react';
import './Video.scss';
import { Route, Routes, useParams } from 'react-router-dom';
import Loading from '../../ui/atoms/Loading/Loading';
import HeaderTabs from '../../common/HeaderTabs/HeaderTabs';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import ContainerProfile from '../../containers/ContainerProfile/ContainerProfile';
import { UserTabPathTypes } from '../../../redux/slices/userInfo/userInfoSlice';
import { Button } from '../../ui/buttons/Button/Button';
import plusIcon from '../../../assets/icons/plus.svg';
import { ADD_PLAYLIST_VIDEO_ROUTE, ADD_VIDEO_ROUTE } from '../../../routes/routes';
import { Link } from 'react-router-dom';
import { setActivePlaylist, setActiveVideo, setActiveVideoLink, setVideoTabValue, sortPlaylist, sortVideoList } from '../../../redux/slices/video/videoSlice';

const AllVideo = React.lazy(() => import('./AllVideo/AllVideo'));
const PlaylistVideo = React.lazy(() => import('./PlaylistVideo/PlaylistVideo'));

const Video: React.FC = () => {
	const params = useParams();
	const dispatch = useAppDispatch();
	const { tabList, linkList, videoTabValue, ...state } = useAppSelector(state => state.videos);

	useEffect(() => {
		if (params['*'] === 'playlist/') {
			dispatch(setActivePlaylist());
		} else {
			dispatch(setActiveVideo());
		}
	}, [params])

	const handleTabCLick = (value: UserTabPathTypes): void => {
		dispatch(setVideoTabValue(value));
		if (params['*'] === 'playlist/') {
			dispatch(sortPlaylist());
		} else {
			dispatch(sortVideoList());
		}
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
					{
						linkList[1].active
							? <Button path={ADD_PLAYLIST_VIDEO_ROUTE} className='video__add-btn'>
								<img src={plusIcon} alt='' className='video__plus-icon' />
								<span>{state.titleAddPlaylist}</span>
							</Button>
							: <Button path={ADD_VIDEO_ROUTE} className='video__add-btn'>
								<img src={plusIcon} alt='' className='video__plus-icon' />
								<span>{state.titleAddVideo}</span>
							</Button>
					}
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
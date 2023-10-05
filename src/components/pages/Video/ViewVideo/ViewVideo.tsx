import React, { useEffect } from 'react';
import './ViewVideo.scss';
import { useLocation, useParams } from 'react-router-dom';
import HeaderViewVideo from './HeaderViewVideo/HeaderViewVideo';
import PlayerViewVideo from './PlayerViewVideo/PlayerViewVideo';
import BodyViewVideo from './BodyViewVideo/BodyViewVideo';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { getVideoData } from '../../../../redux/slices/video/videoSlice';
import Loading from '../../../ui/atoms/Loading/Loading';
import ContainerProfile from '../../../containers/ContainerProfile/ContainerProfile';
import VideoPlayer from '../../../common/VideoPlayer/VideoPlayer';

const ViewVideo: React.FC = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { users } = useAppSelector(state => state.users);
	const { video } = useAppSelector(state => state.videos);

	useEffect((): void => {
		dispatch(getVideoData(id));
	}, [])

	if (!users || !video) return <Loading />

	return (
		<div className='view-video'>
			<ContainerProfile maxWidth='920px'>
				<>
					<HeaderViewVideo
						author={video.author}
						amountSubs={'15'}
						titleBtn={'Subscribe'}
					/>
					<div className="view-video__player-wrap">
						<VideoPlayer
							videoSrc={video.videoURL}
							posterSrc={video.posterURL}
							position='static' />
					</div>
					<BodyViewVideo />
				</>
			</ContainerProfile >
		</div>
	)
}

export default ViewVideo;
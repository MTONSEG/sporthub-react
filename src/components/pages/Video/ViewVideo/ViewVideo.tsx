import React, { useEffect } from 'react';
import './ViewVideo.scss';
import HeaderViewVideo from './HeaderViewVideo/HeaderViewVideo';
import BodyViewVideo from './BodyViewVideo/BodyViewVideo';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { getVideos } from '../../../../redux/slices/video/videoSlice';
import Loading from '../../../ui/atoms/Loading/Loading';
import ContainerProfile from '../../../containers/ContainerProfile/ContainerProfile';
import VideoPlayer from '../../../common/VideoPlayer/VideoPlayer';
import { getCreateDate } from '../../../../utils/getCreateDate';
import { useParams } from 'react-router-dom';

const ViewVideo: React.FC = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { users } = useAppSelector(state => state.users);
	const { videos } = useAppSelector(state => state.videos);

	useEffect((): void => {
		dispatch(getVideos('all'));
	}, [])

	if (!users || !videos) return <Loading />

	return (
		<div className='view-video'>
			<ContainerProfile maxWidth='920px'>
				<>
					<HeaderViewVideo
						videoID={id}
						authorUID={videos[id].author}
						author={users[videos[id].author]}
						titleBtn={'Subscribe'}
					/>
					<div className="view-video__player-wrap">
						<VideoPlayer
							videoSrc={videos[id].videoURL}
							posterSrc={videos[id].posterURL}
							position='static' />
					</div>
					<BodyViewVideo
						title={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame'}
						amountViews={45}
						date={getCreateDate(videos[id].created)}
						description={videos[id].description}
					/>
				</>
			</ContainerProfile >
		</div>
	)
}

export default ViewVideo;
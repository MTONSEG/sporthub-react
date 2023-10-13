import React, { useEffect, useState } from 'react';
import './ViewVideo.scss';
import HeaderViewVideo from './HeaderViewVideo/HeaderViewVideo';
import BodyViewVideo from './BodyViewVideo/BodyViewVideo';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { getVideoComments, getVideos } from '../../../../redux/slices/video/videoSlice';
import Loading from '../../../ui/atoms/Loading/Loading';
import ContainerProfile from '../../../containers/ContainerProfile/ContainerProfile';
import VideoPlayer from '../../../common/VideoPlayer/VideoPlayer';
import { getCreateDate } from '../../../../utils/getCreateDate';
import { useParams } from 'react-router-dom';
import CommentsVideo from './CommentsVideo/CommentsVideo';
import Slider from '../../../ui/sliders/Slider/Slider';
import { SwiperOptions } from 'swiper/types/swiper-options';
import Container from '../../../containers/Container/Container';

const ViewVideo: React.FC = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { users } = useAppSelector(state => state.users);
	const { videos, videosList } = useAppSelector(state => state.videos);
	const [showComments, setShowComments] = useState<boolean>(false);

	const sliderSetting: SwiperOptions = {
		slidesPerView: 1.2,
		spaceBetween: 10,
		loop: true,
		autoplay: {
			delay: 3000
		},
		mousewheel: {
			invert: true
		},
		breakpoints: {
			374: {
				slidesPerView: 1.3,
				spaceBetween: 24,
			},
			576: {
				slidesPerView: 2.3,
				spaceBetween: 24,
			},
			992: {
				slidesPerView: 3.5,
				spaceBetween: 24,
			}
		}
	}

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
						title={videos[id].title}
						videoUID={id}
						amountViews={45}
						date={getCreateDate(videos[id].created)}
						description={videos[id].description}
						showComments={showComments}
						setShowComments={setShowComments}
						like={videos[id].like}
						dislike={videos[id].dislike}
					/>
				</>
			</ContainerProfile >

			<div className="view-video__bottom">
				<Container>
					{
						showComments
							? <CommentsVideo />
							: <Slider
								settings={sliderSetting}
								videos={videosList}
							/>
					}
				</Container>
			</div>

		</div>
	)
}

export default ViewVideo;
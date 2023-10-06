import React, { useEffect } from "react";
import './Home.scss';
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import Slider from "../../ui/sliders/Slider/Slider";
import { SwiperOptions } from "swiper/types/swiper-options";
import ContainerMain from '../../containers/ContainerMain/ContainerMain';
import Loading from '../../ui/atoms/Loading/Loading';
import { getVideos } from '../../../redux/slices/video/videoSlice';
// import { fetchVideos } from '../../../redux/slices/video/videoSlice';

const VideoList = React.lazy(() => import('../../common/VideoList/VideoList'));

const Home: React.FC = () => {
	const { slides } = useAppSelector(state => state.sliderCat);
	const { videosList } = useAppSelector(state => state.videos);
	const titleList = useAppSelector(state => state.videoList.title);
	const dispatch = useAppDispatch();

	const sliderSetting: SwiperOptions = {
		slidesPerView: 'auto',
		spaceBetween: 10,
		resistance: false,
		breakpoints: {
			577: {
				spaceBetween: 16,
			}
		}
	}

	useEffect(() => {
		dispatch(getVideos('all'));
	}, [])

	return (
		<ContainerMain>
			<>
				<div className="home-slider">
					<Slider
						settings={sliderSetting}
						slides={slides} />
				</div>
				<React.Suspense fallback={<Loading />} >
					<VideoList title={titleList} videos={videosList} authorView={false} />
				</React.Suspense>
			</>
		</ContainerMain>
	)
}

export default Home;
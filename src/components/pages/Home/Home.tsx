import React from "react";
import './Home.scss';
import { useAppSelector } from "../../../hooks/hooks";
import Slider from "../../ui/sliders/Slider/Slider";
import { SwiperOptions } from "swiper/types/swiper-options";
import ContainerMain from '../../containers/ContainerMain/ContainerMain';

const VideoList = React.lazy(() => import('../../common/VideoList/VideoList'));

const Home: React.FC = () => {
	const { slides } = useAppSelector(state => state.sliderCat);
	const titleList = useAppSelector(state => state.videoList.title);

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

	return (
		<ContainerMain>
			<>
				<div className="home-slider">
					<Slider
						settings={sliderSetting}
						slides={slides} />
				</div>
				<VideoList title={titleList} />
			</>
		</ContainerMain>
	)
}

export default Home;
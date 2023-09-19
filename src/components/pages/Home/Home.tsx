import React from "react";
import './Home.scss';
import { useAppSelector } from "../../../hooks/hooks";
import Slider from "../../ui/sliders/Slider/Slider";
import { Settings } from "react-slick";
import { SwiperOptions } from "swiper/types/swiper-options";
import { Title } from "../../ui/atoms/Title/Title";
import VideoList from "../../common/VideoList/VideoList";


const Home: React.FC = () => {
	const { slides } = useAppSelector(state => state.sliderCat);

	const sliderSetting: SwiperOptions = {
		slidesPerView: 'auto',
		spaceBetween: 16,
		resistance: false,
		breakpoints: {
			1440: {
				slidesPerView: 3,
				spaceBetween: 26
			},
			992: {
				slidesPerView: "auto"
			}
		}
	}

	return (
		<div className="home">
			<div className="home__slider">
				<Slider
					settings={sliderSetting}
					slides={slides} />
				<VideoList/>
			</div>
		</div>
	)
}

export default Home;
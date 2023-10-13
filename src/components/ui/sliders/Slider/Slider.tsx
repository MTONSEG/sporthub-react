import React, { useEffect, useRef } from 'react';
import './Slider.scss';
import CategorySlide from './CategorySlide/CategorySlide';
import { CategorySlider } from '../../../../redux/slices/home/categorySliderSlice';
import SwiperCore from 'swiper';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { VideoFileType } from '../../../../redux/slices/video/videoSlice';
import VideoItem from '../../../common/VideoItem/VideoItem';
import { User } from '../../../../redux/slices/home/userSlice';
import { useAppSelector } from '../../../../hooks/hooks';

export type SliderPropsType = {
	settings?: SwiperOptions,
	videos?: VideoFileType[],
	slides?: CategorySlider[],
}

const Slider: React.FC<SliderPropsType> = ({
	slides,
	settings,
	videos,
}) => {

	const swiperRef = useRef<HTMLDivElement>(null);
	const { users } = useAppSelector(state => state.users);

	useEffect(() => {
		if (swiperRef.current) {
			new SwiperCore(swiperRef.current, { ...settings })
		}
	})

	return (
		<div className="slider" ref={swiperRef}>
			<div className="swiper-wrapper">
				{
					videos
						? videos?.map(el => (
							<VideoItem
								swiper
								key={el.uid}
								video={el}
								user={users[el.author]}
								authorView
							/>
						))
						: slides?.map(el => (
							<CategorySlide
								key={el.id}
								img={el.image.img}
								webp={el.image.webp}
								category={el.category}
								title={el.title}
								color={el.color}
								path={el.path}
							/>
						))
				}
			</div>
		</div>


	);
}


export default Slider;
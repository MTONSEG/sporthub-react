import React, { useEffect, useRef } from 'react';
import './Slider.scss';
import CategorySlide from './CategorySlide/CategorySlide';
import { CategorySlider } from '../../../../redux/slices/home/categorySliderSlice';
import SwiperCore from 'swiper';
import { SwiperOptions } from 'swiper/types/swiper-options';

export type SliderPropsType = {
	settings?: SwiperOptions,
	slides: CategorySlider[]
}

const Slider: React.FC<SliderPropsType> = ({
	slides,
	settings
}) => {

	const swiperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (swiperRef.current) {
			new SwiperCore(swiperRef.current, {...settings})
		}
	})

	return (
		<div className="slider" ref={swiperRef}>
			<div className="swiper-wrapper">
				{
					slides?.map(el => (
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
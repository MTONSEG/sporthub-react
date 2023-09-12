import React from "react";
import './VerticalSlider.scss';
import SlickSlider from "react-slick";
import { Settings } from "react-slick";
import { SlideVerticalSlider } from "./SlideVerticalSlider/SlideVerticalSlider";
import { slidesAuthType } from "../../../../redux/slices/auth/sliderAuthSlice";

type propsType = {
	heightSlide?: string,
	widthSlide?: string
	rtl?: boolean,
	autoplaySpeed?: number,
	space?: string,
	list: slidesAuthType[],
}


const VerticalSlider: React.FC<propsType> = ({
	heightSlide,
	widthSlide,
	rtl = false,
	autoplaySpeed,
	space = '0',
	list,
}) => {
	const settings: Settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		centerMode: true,
		autoplay: true,
		autoplaySpeed,
		verticalSwiping: true,
		rtl,
	};

	return (
		<SlickSlider {...settings}>
			{
				list.map(el => (
					<SlideVerticalSlider
						key={el.id}
						image={el.image.img}
						webp={el.image.webp}
						name={el.name}
						text={el.text}
						height={heightSlide}
						width={widthSlide}
						space={space}
						variant={el.variant}
					/>
				))
			}
		</SlickSlider>
	)
}

export default VerticalSlider;
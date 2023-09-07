import React, { CSSProperties, MouseEventHandler } from "react";
import './VerticalSlider.scss';
import SlickSlider from "react-slick";
import { Settings } from "react-slick";
import img1 from '../../../../assets/images/auth/big-slide-1.jpg';
import img2 from '../../../../assets/images/auth/big-slide-2.jpg';
import img3 from '../../../../assets/images/auth/big-slide-3.jpg';
import img4 from '../../../../assets/images/auth/big-slide-4.jpg';
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
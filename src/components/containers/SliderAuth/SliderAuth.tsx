import React from "react";
import './SliderAuth.scss';
import VerticalSlider from "../../ui/sliders/VerticalSlider/VerticalSlider";
import { useAppSelector } from "../../../hooks/hooks";


export const SliderAuth = () => {
	const { small, big } = useAppSelector(state => state.sliderAuth);

	const firstSettings = {
		heightSlide: '340px',
		widthSlide: '280px',
		slidesToShow: 1,
		autoplaySpeed: 3000,
		space: '16px 0',
		list: big,
	}
	const secondSettings = {
		heightSlide: '280px',
		widthSlide: '220px',
		autoplaySpeed: 3000,
		space: '12px 0',
		rtl: true,
		list: small,
	}
	return (
		<div className="slider-auth">
			<div className="slider-auth__row">
				<div className="slider-auth__left">
					<VerticalSlider {...firstSettings} />
				</div>
				<div className="slider-auth__right">
					<VerticalSlider {...secondSettings} />
				</div>
			</div>
		</div>
	)
}
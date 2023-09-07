import React, { useEffect } from "react";
import './SliderAuth.scss';
// import VerticalSlider from "../../ui/sliders/VerticalSlider/VerticalSlider";
import { useAppSelector } from "../../../hooks/hooks";
import Loading from "../../ui/atoms/Loading/Loading";

const VerticalSlider = React.lazy(() => import('../../ui/sliders/VerticalSlider/VerticalSlider'));

const SliderAuth = () => {
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

	useEffect(() => {
		setTimeout(() => { console.log('go') }, 2000);
	}, [])

	setTimeout(() => { console.log('go') }, 2000)

	return (
		<div className="slider-auth">

			<React.Suspense fallback={<Loading/>}>
				<div className="slider-auth__row">
					<div className="slider-auth__left">
						<VerticalSlider {...firstSettings} />
					</div>
					<div className="slider-auth__right">
						<VerticalSlider {...secondSettings} />
					</div>
				</div>
			</React.Suspense>
		</div>
	)
}

export default SliderAuth;
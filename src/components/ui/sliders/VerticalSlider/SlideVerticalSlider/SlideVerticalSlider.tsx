import React, { CSSProperties } from "react";
import './SlideVerticalSlider.scss';
import Picture from "../../../../ui/atoms/Picture/Picture";
import { variantAuthSlideType } from "../../../../../redux/slices/auth/sliderAuthSlice";

type propsType = {
	image: string,
	webp?: string,
	height?: string,
	width?: string,
	space?: string,
	name?: string,
	text?: string,
	variant?:variantAuthSlideType
}

export const SlideVerticalSlider: React.FC<propsType> = ({
	image,
	webp,
	height,
	width,
	space,
	name,
	text,
	variant = 'big'
}) => {

	const styles: CSSProperties = {
		height,
		width,
		margin: space
	}

	return (
		<div className={`vertical-slide ${variant}`}style={styles}>
			<div className="vertical-slide__body">
				<p className="vertical-slide__name">{name}</p>
				<p className="vertical-slide__text">{text}</p>
			</div>
			<div className="vertical-slide__image-wrap">
				<Picture
					img={image}
					webp={webp}
					alt={name}
					width={width}
					height={height}
				/>
				<img src={image} alt="" className="vertical-slide__image" />
			</div>
		</div>
	)
}
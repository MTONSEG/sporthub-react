import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { NumStrNullType } from "../auth/singupSlice";
import { imageType } from "../auth/sliderAuthSlice";
import imgMind from '../../../assets/images/home/cat_sliders/mind.jpg';
import imgBody from '../../../assets/images/home/cat_sliders/body.jpg';
import imgSoul from '../../../assets/images/home/cat_sliders/soul.jpg';
import imgMindWebp from '../../../assets/images/home/cat_sliders/mind.jpg?as=webp';
import imgBodyWebp from '../../../assets/images/home/cat_sliders/body.jpg?as=webp';
import imgSoulWebp from '../../../assets/images/home/cat_sliders/soul.jpg?as=webp';
import { BODY_VIDEO_ROUTE, MIND_VIDEO_ROUTE, SOUL_VIDEO_ROUTE } from "../../../routes/routes";

export interface CategorySlider {
	id: NumStrNullType,
	category: string,
	title: string,
	more: string,
	path: string,
	color:string,
	image: imageType,
}

type CategorySliderType = {
	slides: CategorySlider[]
}

const initialState: CategorySliderType = {
	slides: [
		{
			id: uuid(),
			category: 'mind',
			title: 'Educational videos',
			more: 'More',
			path: MIND_VIDEO_ROUTE,
			color: '#AD7955',
			image: {
				img: imgMind,
				webp: imgMindWebp
			},
		},
		{
			id: uuid(),
			category: 'body',
			title: 'Fitness videos',
			more: 'More',
			path: BODY_VIDEO_ROUTE,
			color: '#8F5334',
			image: {
				img: imgBody,
				webp: imgBodyWebp
			},
		},
		{
			id: uuid(),
			category: 'soul',
			title: 'Spiritual videos',
			more: 'More',
			color: '#653012',
			path: SOUL_VIDEO_ROUTE,
			image: {
				img: imgSoul,
				webp: imgSoulWebp
			},
		}
	]
}

export const categorySliderSlice = createSlice({
	name: 'categorySlider',
	initialState,
	reducers: {

	}
})

export default categorySliderSlice.reducer;
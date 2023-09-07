import { createSlice } from "@reduxjs/toolkit";
import img1 from '../../../assets/images/auth/big-slide-1.jpg';
import img2 from '../../../assets/images/auth/big-slide-2.jpg';
import img3 from '../../../assets/images/auth/big-slide-3.jpg';
import img4 from '../../../assets/images/auth/big-slide-4.jpg';
import img1Webp from '../../../assets/images/auth/big-slide-1.jpg?as=webp';
import img2Webp from '../../../assets/images/auth/big-slide-2.jpg?as=webp';
import img3Webp from '../../../assets/images/auth/big-slide-3.jpg?as=webp';
import img4Webp from '../../../assets/images/auth/big-slide-4.jpg?as=webp';
import imgSmall1 from '../../../assets/images/auth/small-slide-1.jpg';
import imgSmall2 from '../../../assets/images/auth/small-slide-2.jpg';
import imgSmall3 from '../../../assets/images/auth/small-slide-3.jpg';
import imgSmall1Webp from '../../../assets/images/auth/small-slide-1.jpg?as=webp';
import imgSmall2Webp from '../../../assets/images/auth/small-slide-2.jpg?as=webp';
import imgSmall3Webp from '../../../assets/images/auth/small-slide-3.jpg?as=webp';
import uuid from "react-uuid";

export type variantAuthSlideType = 'big' | 'small' 

type imageType = {
	img: string,
	webp: string
}

export type slidesAuthType = {
	id: string | number,
	image: imageType,
	name: string,
	text: string,
	variant?: variantAuthSlideType
}

type stateType = {
	big: slidesAuthType[]
	small: slidesAuthType[]
}


const initialState: stateType = {
	big: [
		{
			id: uuid(),
			image: {
				img: img1,
				webp: img1Webp
			},
			name: 'Kristin Watson',
			text: 'Rehabilitation specialist',
			variant: 'big'
		},
		{
			id: uuid(),
			image: {
				img: img2,
				webp: img2Webp
			},
			name: 'Devon Lane',
			text: 'Fitness trainer',
			variant: 'big'
		},
		{
			id: uuid(),
			image: {
				img: img3,
				webp: img3Webp
			},
			name: 'Eleanor Pena',
			text: 'Fitness trainer',
			variant: 'big'
		},
		{
			id: uuid(),
			image: {
				img: img4,
				webp: img4Webp
			},
			name: 'Annette Black',
			text: 'Rehabilitation specialist',
			variant: 'big'
		},

	],
	small: [
		{
			id: uuid(),
			image: {
				img: imgSmall1,
				webp: imgSmall1Webp
			},
			name: 'Courtney Henry',
			text: 'Yoga guru',
			variant: 'small'
		},
		{
			id: uuid(),
			image: {
				img: imgSmall2,
				webp: imgSmall2Webp
			},
			name: 'Theresa Webb',
			text: 'Fitness trainer',
			variant: 'small'
		},
		{
			id: uuid(),
			image: {
				img: imgSmall3,
				webp: imgSmall3Webp
			},
			name: 'Courtney Henry',
			text: 'Yoga guru',
			variant: 'small'
		},
	]
}

const sliderAuthSlice = createSlice({
	name: 'singIn',
	initialState,
	reducers: {}
})

// export const { test } = singinSlice.actions;
export default sliderAuthSlice.reducer;
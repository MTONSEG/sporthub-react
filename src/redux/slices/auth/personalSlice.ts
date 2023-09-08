import { createSlice } from "@reduxjs/toolkit";
import { inputType } from "./singinSlice";
import uuid from "react-uuid";

export type uploadType = {
	title: string,
	text: string
}
export type genderType = 'male' | 'female' | 'none';

export type birthdayType = {
	title: string,
	placeholder: string,
	dateMask: string,
	maskChar: string,
}
export type radioType = {
	id: string | number,
	title: string,
	value: genderType
}
export type radioListType = {
	title: string,
	list: radioType[]
}

export type personalAuthType = {
	gender: string,
	title: string,
	btnNext: string,
	btnBack: string,
	upload: uploadType,
	birthday: birthdayType,
	radio: radioListType

}

const initialState: personalAuthType = {
	gender: '',
	title: 'Personal Information',
	upload: {
		title: 'Information about adding photo',
		text: 'Information about adding photo. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
	},
	btnNext: 'Finish',
	btnBack: 'Back',
	birthday: {
		title: 'Date of birthday',
		placeholder: 'MM.DD.YYYY',
		dateMask: '99.99.9999',
		maskChar: '_'
	},
	radio: {
		title: 'Gender',
		list: [
			{ id: uuid(), title: 'Male', value:'male' },
			{ id: uuid(), title: 'Female', value:'female' },
			{ id: uuid(), title: 'None', value:'none'},
		]
	}
}

const personalSlice = createSlice({
	name: 'forgotPassword',
	initialState,
	reducers: {}
})

// export const { test } = singupSlice.actions;
export default personalSlice.reducer;
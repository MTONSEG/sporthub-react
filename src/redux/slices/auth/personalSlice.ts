import { createSlice } from "@reduxjs/toolkit";
import { inputType } from "./singinSlice";
import uuid from "react-uuid";

export type uploadType = {
	title: string,
	text: string
}

export type birthdayType = {
	title: string,
	text: string
}
export type radioType = {
	id: string | number,
	title: string,
	checked: boolean
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
	birthday: inputType,
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
		title: 'birthday',
		placeholder: 'MM.DD.YYYY'
	},
	radio: {
		title: 'Gender',
		list: [
			{ id: uuid(), title: 'Male', checked: false },
			{ id: uuid(), title: 'Female', checked: false },
			{ id: uuid(), title: 'None', checked: false },
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
import { createSlice } from "@reduxjs/toolkit";
import { subtextType } from "./singinSlice";

export type forgotType = {
	title: string,
	subtext: subtextType
}

const initialState: forgotType = {
	title: 'Please check your inbox',
	subtext: {
		text: 'Didn\'t receive the email?',
		linkTitle: 'Go to Support',
		link: '/'
	},
}

const checkSlice = createSlice({
	name: 'forgotPassword',
	initialState,
	reducers: {}
})

// export const { test } = singupSlice.actions;
export default checkSlice.reducer;
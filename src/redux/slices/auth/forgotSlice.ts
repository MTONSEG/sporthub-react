import { createSlice } from "@reduxjs/toolkit";
import { inputType} from "./singinSlice";

export type forgotType = {
	title: string,
	text: string
	btn: string,
	email: inputType
}

const initialState: forgotType = {
	title: 'Forgot your password?',
	text: 'Enter your email address and we\'ll send you instructions on how to reset your password',
	btn: 'Send Email',
	email: {
		title: 'Email',
		placeholder: 'Your Email'
	},
}

const forgotSlice = createSlice({
	name: 'forgotPassword',
	initialState,
	reducers: {}
})

// export const { test } = singupSlice.actions;
export default forgotSlice.reducer;
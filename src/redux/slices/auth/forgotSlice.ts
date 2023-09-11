import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { inputType} from "./singinSlice";

export type forgotType = {
	title: string,
	text: string
	btn: string,
	current: string,
	url: string,
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
	current: '',
	url: 'https://spaceteam.pp.ua/#/restore'
}

const forgotSlice = createSlice({
	name: 'forgotPassword',
	initialState,
	reducers: {
		setCurrentForgotEmail(state, action: PayloadAction<string>) {
			state.current = action.payload;
		}
	}
})

export const { setCurrentForgotEmail } = forgotSlice.actions;
export default forgotSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AUTH_FORGOT_ROUTE, AUTH_REG_ROUTE } from "../../../routes/routes";

type forgotType = {
	title: string,
	link: string
}
export type inputType = {
	title: string,
	placeholder: string
}
export type subtextType = {
	text: string,
	linkTitle: string,
	link: string
}

export type singInType = {
	title: string,
	forgot: forgotType,
	btn: string,
	email: inputType,
	password: inputType
	subtext: subtextType,
	terms: string
}

const initialState: singInType = {
	title: 'Sign in',
	forgot: {
		title: 'Forgot password?',
		link: AUTH_FORGOT_ROUTE
	},
	btn: 'Sign in',
	email: {
		title: 'Email',
		placeholder: 'Your Email'
	},
	password: {
		title: 'Password',
		placeholder: 'Your password'
	},
	subtext: {
		text: 'Don’t have an account?',
		linkTitle: 'Sign up',
		link: AUTH_REG_ROUTE
	},
	terms: 'By proceeding, you agree to our Terms of Use and Privacy Policy'
}

const singinSlice = createSlice({
	name: 'singIn',
	initialState,
	reducers: {}
})

// export const { test } = singinSlice.actions;
export default singinSlice.reducer;
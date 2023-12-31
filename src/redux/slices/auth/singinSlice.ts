import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AUTH_FORGOT_ROUTE, AUTH_REG_ROUTE } from "../../../routes/routes";

export interface ICurrentUser {
	name: string,
	photoURL: string
}

type forgotType = {
	title: string,
	link: string
}
export interface inputType {
	title: string,
	placeholder: string,
	value?: string
}
export type subtextType = {
	text: string,
	linkTitle: string,
	link: string
}

export type singInType = {
	currentUser: ICurrentUser,
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
	terms: 'By proceeding, you agree to our Terms of Use and Privacy Policy',
	currentUser: {
		name: '',
		photoURL: ''
	}
}

const singinSlice = createSlice({
	name: 'singIn',
	initialState,
	reducers: {
		setCurrentUser(state, action: PayloadAction<ICurrentUser>) {
			state.currentUser = action.payload;
		},
		setNameCurrentUser(state, action: PayloadAction<string>) {
			state.currentUser.name = action.payload;
		},
		setPhotoURLCurrentUser(state, action: PayloadAction<string>) {
			state.currentUser.photoURL = action.payload;
		}
	}
})

export const { setCurrentUser, setNameCurrentUser, setPhotoURLCurrentUser } = singinSlice.actions;
export default singinSlice.reducer;
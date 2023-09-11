import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AUTH_ROUTE } from "../../../routes/routes";
import { inputType, subtextType } from "./singinSlice";

export type NumStrNullType = number | string | null;

export interface ICurrent {
	uid: NumStrNullType,
	imageURL: string | null,
}

export type singUpType = {
	current: ICurrent,
	title: string,
	btn: string,
	firstName: inputType,
	lastName: inputType,
	email: inputType,
	password: inputType
	subtext: subtextType,
	terms: string
}

const initialState: singUpType = {
	current: {
		uid: null,
		imageURL: null
	},
	title: 'Sign up',
	btn: 'Sign up',
	firstName: {
		title: 'First Name',
		placeholder: 'Your First Name'
	},
	lastName: {
		title: 'Last Name',
		placeholder: 'Your Last Name'
	},
	email: {
		title: 'Email',
		placeholder: 'Your Email'
	},
	password: {
		title: 'Password',
		placeholder: 'Your password'
	},
	subtext: {
		text: 'Already have an account?',
		linkTitle: 'Sign in',
		link: AUTH_ROUTE
	},
	terms: 'By proceeding, you agree to our Terms of Use and Privacy Policy'
}

const singupSlice = createSlice({
	name: 'singUp',
	initialState,
	reducers: {
		setCurrentUID(state, action: PayloadAction<NumStrNullType>) {
			state.current.uid = action.payload;
		},
	}
})

export const { setCurrentUID } = singupSlice.actions;
export default singupSlice.reducer;
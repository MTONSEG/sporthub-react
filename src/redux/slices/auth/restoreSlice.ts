import { createSlice } from "@reduxjs/toolkit";
import { inputType} from "./singinSlice";

export type restorePassType = {
	title: string,
	btn: string,
	password: inputType,
	confirmPassword: inputType,
}

const initialState: restorePassType = {
	title: 'Restore password',
	btn: 'Save',
	password: {
		title: 'New Password',
		placeholder: 'New password'
	},
	confirmPassword: {
		title: 'Confirm Password',
		placeholder: 'Confirm password'
	},
}

const restoreSlice = createSlice({
	name: 'restorePassword',
	initialState,
	reducers: {}
})

// export const { test } = singupSlice.actions;
export default restoreSlice.reducer;
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { inputType} from "./singinSlice";

export type restorePassType = {
	title: string,
	btn: string,
	currentPass: string,
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
	currentPass: ''
}

const restoreSlice = createSlice({
	name: 'restorePassword',
	initialState,
	reducers: {
		setCurrentRestorePass(state, action: PayloadAction<string>) {
			state.currentPass = action.payload;
		}
	}
})

export const { setCurrentRestorePass } = restoreSlice.actions;
export default restoreSlice.reducer;
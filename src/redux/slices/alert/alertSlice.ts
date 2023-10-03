import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type alertType = {
	variant: 'error' | 'mess',
	mess: string,
	show: boolean,
	success: string,
	require: string,
	needReg: string,
	welcome: string,
	photo: string,
	singin: string,
	weekPass: string,
	confirmPass: string,
	updatePass: string,
	successVideoUpload: string,
	personalSave: string,
}


const initialState: alertType = {
	variant: 'mess',
	mess: '',
	show: false,
	success: 'You have successfully registered. \nAdd some information about yourself.',
	require: 'All fields are required',
	needReg: 'First you need to Sing Up',
	welcome: 'Welcome! Make yourself at home',
	photo: 'Photo uploaded successfully',
	singin: 'Your information has been successfully added',
	weekPass: 'Week password',
	confirmPass: 'Password mismatch',
	updatePass: 'Password is updated. Please Sing In with new password',
	successVideoUpload: 'Your video is successfully published',
	personalSave: 'Saved personal data'
}

const alertSlice = createSlice({
	name: 'checkEmail',
	initialState,
	reducers: {
		showAlert(state: alertType, action: PayloadAction<boolean>) {
			state.show = action.payload;
		},
		setMessage(state: alertType, action: PayloadAction<string>) {
			state.mess = action.payload
		},
		setVarianError(state: alertType) {
			state.variant = 'error'
		},
		setVarianMess(state: alertType) {
			state.variant = 'mess'
		},
	}
})

export const { showAlert, setMessage, setVarianError, setVarianMess } = alertSlice.actions;
export default alertSlice.reducer;
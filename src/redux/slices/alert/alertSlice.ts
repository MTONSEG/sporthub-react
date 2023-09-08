import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type alertType = {
	variant: 'error' | 'mess',
	mess: string,
	show: boolean,
	success: string,
	require: string,
	needReg: string,
}

const initialState: alertType = {
	variant: 'mess',
	mess: '',
	show: false,
	success: 'You have successfully registered. \nAdd some information about yourself.',
	require: 'All fields are required',
	needReg: 'First you need to Sing Up'
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
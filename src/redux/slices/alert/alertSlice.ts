import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type alertType = {
	variant: 'error' | 'mess',
	mess: string,
	show: boolean,
	success: string
}

const initialState: alertType = {
	variant: 'mess',
	mess: '',
	show: false,
	success: 'Success. Can you sing in with your email and password'
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
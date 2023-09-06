import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type itemLink = {
	id: string | number,
	title: string,
	to: string
}

type headerLinks = {
	links: itemLink[]
}

const initialState: headerLinks = {
	links: []
}

const headerSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {
		test(state, action: PayloadAction<string>) {
			console.log(action.payload)
		}
	}
})

export const { test } = headerSlice.actions;
export default headerSlice.reducer;
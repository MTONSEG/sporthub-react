import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { ILink } from "../header/headerSlice";
import { HOME_ROUTE, LATEST_ROUTE, VIEW_LATER_ROUTE } from "../../../routes/routes";

type ListVideoType = {
	title: string,
}

const initialState: ListVideoType = {
	title: 'Video List',
}

const listVideoSlice = createSlice({
	name: 'homeList',
	initialState,
	reducers: {},
})
// export const { test } = listVideoSlice.actions;
export default listVideoSlice.reducer;
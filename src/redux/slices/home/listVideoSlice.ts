import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { ILink } from "../header/headerSlice";
import { HOME_ROUTE, LATEST_ROUTE, VIEW_LATER_ROUTE } from "../../../routes/routes";
import { NumStrNullType } from "../auth/singupSlice";

export interface IVideo {
	title: string,
	date: string,
	posterURL: string,
	photoURL: string,
	author: string,
	uid: NumStrNullType
}

type ListVideoType = {
	title: string,
	titleLatest:string,
	videos: IVideo[]
}

const initialState: ListVideoType = {
	title: 'Video List',
	titleLatest: 'Latest Video',
	videos: []
}

const listVideoSlice = createSlice({
	name: 'homeList',
	initialState,
	reducers: {},
})
// export const { test } = listVideoSlice.actions;
export default listVideoSlice.reducer;
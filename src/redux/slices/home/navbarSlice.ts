import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { ILink } from "../header/headerSlice";
import { HOME_ROUTE, LATEST_ROUTE } from "../../../routes/routes";

type navBarType = {
	links:ILink[]
}


const initialState = {
	links: [
		{
			id: uuid(),
			title: 'Home',
			path: HOME_ROUTE
		},
		{
			id: uuid(),
			title: 'Latest',
			path: LATEST_ROUTE
		},
		{
			id: uuid(),
			title: 'View later ',
			path: LATEST_ROUTE
		},
	],

}

// export const getSubscriptions = createAsyncThunk()


const navbarSlice = createSlice({
	name: 'navbar',
	initialState,
	reducers: {
		
	}
})

export default navbarSlice.actions
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { ILink } from "../header/headerSlice";
import { HOME_ROUTE, LATEST_ROUTE, VIEW_LATER_ROUTE } from "../../../routes/routes";



interface User {
	bod: string,
	email: string,
	firstName: string,
	gender: string,
	imageUrl: string,
	lastName: string,
	password: string
}

interface Subscriber extends User {
	uid: string
}

type UserObject = {
	[key: string]: User
}

type navBarType = {
	loading: boolean,
	links: ILink[],
	users: UserObject | null,
	subscribers: Subscriber[] | null,
	titleSubs: string,
	titleSubsBtn: string
}

const initialState: navBarType = {
	loading: false,
	users: null,
	subscribers: [],
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
			path: VIEW_LATER_ROUTE
		},
	],
	titleSubs: 'My subscription',
	titleSubsBtn: 'Show more'
}

export const getUsers = createAsyncThunk<UserObject, null, { rejectValue: string }>(
	'users/getUsers',
	async function (_, { rejectWithValue }) {
		const res = await fetch('https://sporthub-8cd3f-default-rtdb.firebaseio.com/users.json');

		const data = await res.json();

		if (!res.ok) {
			return rejectWithValue('Server Error');
		}

		return data;
	}
)


const navbarSlice = createSlice({
	name: 'navbar',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getUsers.pending, (state) => {
				state.loading = true;
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.users = action.payload;

				for (let item in action.payload) {
					let obj: Subscriber = {
						...action.payload[item],
						uid: item,
					}
					state.subscribers.push(obj)
				}
				state.loading = false;
			})
	}
})
// export const { test } = navbarSlice.actions;
export default navbarSlice.reducer;
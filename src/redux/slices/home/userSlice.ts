import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { ILink } from "../header/headerSlice";
import { HOME_ROUTE, LATEST_ROUTE, VIEW_LATER_ROUTE } from "../../../routes/routes";
import { NumStrNullType } from '../auth/singupSlice';



export interface User {
	uid?: NumStrNullType
	bod?: string,
	email?: string,
	firstName?: string,
	gender?: string,
	imageUrl?: string,
	lastName?: string,
	password?: string,
	subscribes?: Subscribe
}

export type Subscribe = {
	[key: string]: boolean | null
}

type UserObject = {
	[key: string]: User
}

type navBarType = {
	loading: boolean,
	links: ILink[],
	users: UserObject | null,
	subscribes: User[],
	titleSubs: string,
	titleSubsBtn: string,
	current: User,
	list: any
}

const initialState: navBarType = {
	loading: false,
	users: null,
	titleSubs: 'My subscribes',
	titleSubsBtn: 'Show more',
	subscribes: [],
	current: {},
	list: [],
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


const userSlice = createSlice({
	name: 'navbar',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<User>) {
			state.current = action.payload;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(getUsers.pending, (state) => {
				state.loading = true;
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.users = action.payload;

				let subscribesObj = {
					...action.payload[state.current.uid].subscribes,
				}

				state.subscribes = Object.keys(subscribesObj).map(key => {
					return {
						uid: key,
						...action.payload[key]
					}
				});

				state.loading = false;
			})
	}
})
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
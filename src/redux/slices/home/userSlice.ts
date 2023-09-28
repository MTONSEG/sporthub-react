import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { ILink } from "../header/headerSlice";
import { HOME_ROUTE, LATEST_ROUTE, VIEW_LATER_ROUTE } from "../../../routes/routes";
import { NumStrNullType } from '../auth/singupSlice';
import { genderType } from '../auth/personalSlice';

export interface SubscribeParameters {
	userUID: string | number,
	subscriberUID: string | number
}

export interface User {
	uid?: NumStrNullType
	bod?: string,
	email?: string,
	firstName?: string,
	gender?: genderType,
	imageUrl?: string,
	lastName?: string,
	password?: string,
	subscribes?: Subscribe,
	address?:string,
	description?: string,
	vimeo?: string,
	facebook?: string,
	instagram?: string,
	twitter?: string,
	businessName?: string,
	photoURL?: string,
	photoName?: string,
	posterURL?: string,
	posterName?: string,
}

export type Subscribe = {
	[key: string]: boolean | null
}

export type UserObject = {
	[key: string]: User
}

type navBarType = {
	loading: boolean,
	links: ILink[],
	users: UserObject | null,
	subscribeList: User[],
	titleSubs: string,
	titleSubsBtn: string,
	logged: User,
	list: any
}

const initialState: navBarType = {
	loading: false,
	users: null,
	titleSubs: 'My subscribes',
	titleSubsBtn: 'Show more',
	subscribeList: [],
	logged: {},
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

export const fetchSubscribe = createAsyncThunk<void, SubscribeParameters, { rejectValue: string }>(
	'users/subscribe',
	async (params, { rejectWithValue, dispatch }) => {
		let { userUID, subscriberUID } = params;
		let URL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/users/${userUID}/subscribes.json`;

		let body = JSON.stringify({
			[subscriberUID]: true
		});

		const res = await fetch(URL, {
			method: 'PATCH',
			body,
			headers: {
				'Content-Type': 'application/json',
			},
		})
		let data = await res.json();

		dispatch(subscribeUser(params));
		if (!res.ok) {
			rejectWithValue('Error');
		}
	}
)

export const fetchUnsubscribe = createAsyncThunk<void, SubscribeParameters, { rejectValue: string }>(
	'users/unsubscribe',
	async (params, { rejectWithValue, dispatch }) => {
		let { userUID, subscriberUID } = params;
		let URL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/users/${userUID}/subscribes.json`;

		let body = JSON.stringify({
			[subscriberUID]: false
		});

		const res = await fetch(URL, {
			method: 'PATCH',
			body,
			headers: {
				'Content-Type': 'application/json',
			},
		})
		let data = await res.json();
		dispatch(unsubscribeUser(params));

		if (!res.ok) {
			rejectWithValue('Error');
		}
	}
)

const userSlice = createSlice({
	name: 'navbar',
	initialState,
	reducers: {
		setLoggedUser(state, action: PayloadAction<User>) {
			state.logged = action.payload;
		},
		subscribeUser(state, action: PayloadAction<SubscribeParameters>) {
			let { userUID, subscriberUID } = action.payload;
			state.users[userUID].subscribes[subscriberUID] = true;

			let obj: User = {
				uid: subscriberUID,
				...state.users[subscriberUID]
			}

			state.subscribeList.push(obj)

		},
		unsubscribeUser(state, action: PayloadAction<SubscribeParameters>) {
			let { userUID, subscriberUID } = action.payload;
			state.users[userUID].subscribes[subscriberUID] = false;

			state.subscribeList = state.subscribeList.filter(el => el.uid !== subscriberUID)
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
					...action.payload[state.logged.uid].subscribes,
				}


				state.subscribeList = Object.keys(subscribesObj).map(key => {
					return {
						uid: key,
						...action.payload[key]
					}
				});

				state.loading = false;
			})
			.addCase(fetchSubscribe.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchSubscribe.fulfilled, (state) => {
				state.loading = false;
			})
			.addCase(fetchUnsubscribe.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchUnsubscribe.fulfilled, (state) => {
				state.loading = false;
			})
	}
})
export const { setLoggedUser, subscribeUser, unsubscribeUser } = userSlice.actions;
export default userSlice.reducer;
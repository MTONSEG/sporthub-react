import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { ILink } from "../header/headerSlice";
import { HOME_ROUTE, LATEST_ROUTE, VIEW_LATER_ROUTE } from "../../../routes/routes";
import { NumStrNullType } from '../auth/singupSlice';
import { genderType } from '../auth/personalSlice';
import { VideoFileType } from '../video/videoSlice';
import { getUserUID } from '../../../utils/getUserUID';

type NumString = string | number;

export interface SubscribeParameters {
	userUID: string | number,
	subscriberUID: string | number
}
export interface IVideo {
	id: NumString,
	fileURL: string,
	category: string,
	title: string,
	author: NumStrNullType,
	description: string,
	shopifyURL: string
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
	address?: string,
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
	amountSubscribers?: number,
	videos?: VideoFileType
}

export type Subscribe = {
	[key: string]: boolean | null
}

export type UserObject = {
	[key: string]: User
}

export type UserType = {
	loading: boolean,
	links: ILink[],
	users: UserObject | null,
	subscribeList: User[],
	titleSubs: string,
	titleSubsBtn: string,
	logged: User,
	videos: { [key: string]: VideoFileType } | null,
}

const initialState: UserType = {
	loading: false,
	users: null,
	videos: null,
	titleSubs: 'My subscribes',
	titleSubsBtn: 'Show more',
	subscribeList: [],
	logged: {},
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
	async function (_, { rejectWithValue, dispatch }) {
		const res = await fetch('https://sporthub-8cd3f-default-rtdb.firebaseio.com/users.json');

		const data = await res.json();

		if (!res.ok) {
			return rejectWithValue('Server Error');
		}

		return data;
	}
)

export const fetchSubscribe = createAsyncThunk<void, SubscribeParameters, {
	rejectValue: string,
	state: { users: UserType }
}>(
	'users/subscribe',
	async (params, { rejectWithValue, dispatch, getState }) => {
		try {
			console.log(params);
			let { userUID, subscriberUID } = params;
			let subsURL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/users/${userUID}/subscribes.json`;
			let userURL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/users/${userUID}.json`;

			let amountSubs: number = getState().users.users[userUID].amountSubscribers;


			let subsBody = JSON.stringify({
				[subscriberUID]: true
			});
			console.log(subsBody)
			let amountSubsBody = JSON.stringify({
				amountSubscribers: amountSubs ? amountSubs + 1 : 1
			})

			dispatch(subscribeUser(params));

			await fetch(subsURL, {
				method: 'PATCH',
				body: subsBody,
				headers: {
					'Content-Type': 'application/json',
				},
			})

			await fetch(userURL, {
				method: 'PATCH',
				body: amountSubsBody,
				headers: {
					'Content-Type': 'application/json',
				},
			})


		}
		catch (e) {
			rejectWithValue('Error');
		}
	}
)

export const fetchUnsubscribe = createAsyncThunk<void, SubscribeParameters, {
	rejectValue: string,
	state: { users: UserType }
}>(
	'users/unsubscribe',
	async (params, { rejectWithValue, dispatch, getState }) => {
		try {
			let { userUID, subscriberUID } = params;
			let subsURL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/users/${userUID}/subscribes.json`;
			let userURL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/users/${userUID}.json`;

			let amountSubs: number = getState().users.users[userUID].amountSubscribers;
			console.log(amountSubs);

			let subsBody = JSON.stringify({
				[subscriberUID]: false
			});

			let amountSubsBody = JSON.stringify({
				amountSubscribers: amountSubs ? amountSubs - 1 : 0
			})

			await fetch(subsURL, {
				method: 'PATCH',
				body: subsBody,
				headers: {
					'Content-Type': 'application/json',
				},
			})

			await fetch(userURL, {
				method: 'PATCH',
				body: amountSubsBody,
				headers: {
					'Content-Type': 'application/json',
				},
			})

			dispatch(unsubscribeUser(params));
		}
		catch (e) {
			rejectWithValue(e);
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
			let currentAmount: number = state.users[userUID].amountSubscribers;

			if (state.users[userUID].subscribes) {
				state.users[userUID].subscribes[subscriberUID] = true;
			}

			let obj: User = {
				uid: subscriberUID,
				...state.users[subscriberUID]
			}

			state.subscribeList.push(obj);

			state.users[userUID].amountSubscribers = currentAmount
				? currentAmount + 1
				: 1

		},
		unsubscribeUser(state, action: PayloadAction<SubscribeParameters>) {
			let { userUID, subscriberUID } = action.payload;
			let currentAmount: number = state.users[userUID].amountSubscribers;

			state.users[userUID].subscribes[subscriberUID] = false;

			state.subscribeList = state.subscribeList.filter(el => el.uid !== subscriberUID)

			state.users[userUID].amountSubscribers = currentAmount
				? currentAmount - 1
				: 0
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
					...action.payload[getUserUID().uid].subscribes,
				}
				let list: User[] = Object.keys(subscribesObj).map(key => {
					let current: boolean = action.payload[getUserUID().uid].subscribes[key];

					if (current) {
						return {
							uid: key,
							...action.payload[key]
						}
					}
				});

				state.subscribeList = list.filter(el => el);

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
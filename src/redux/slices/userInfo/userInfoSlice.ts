import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import img from '../../../assets/images/subscription/poster.jpg';
import webp from '../../../assets/images/subscription/poster.jpg?as=webp';
import { imageType } from '../auth/sliderAuthSlice';
import uuid from 'react-uuid';
import { User, UserObject } from '../home/userSlice';

type TabLink = {
	id: string,
	title: string,
	path: string
}

type IconSubsID = 'subscribers' | 'videos' | 'views';

export type InfoSubs = {
	iconID: IconSubsID,
	text: string,
	amount?: number
}

type UserInfoType = {
	loading: boolean,
	subscribers: InfoSubs,
	videos: InfoSubs,
	views: InfoSubs,
	poster: imageType,
	user: User,
	tabList: TabLink[]
}

const initialState: UserInfoType = {
	loading: false,
	poster: { img, webp },
	subscribers: {
		iconID: 'subscribers',
		text: 'Subscribers'
	},
	videos: {
		iconID: 'videos',
		text: 'Subscribers'
	},
	views: {
		iconID: 'views',
		text: 'Subscribers'
	},
	user: null,
	tabList: [
		{
			id: uuid(),
			title: 'Video',
			path: ''
		}
	]
}

export const fetchUserInfo = createAsyncThunk<UserObject, string | number, { rejectValue: string }>(
	'users/fetchUserInfo',
	async (_, { rejectWithValue }) => {
		const res = await fetch('https://sporthub-8cd3f-default-rtdb.firebaseio.com/users.json');

		const data = await res.json();

		if (!res.ok) {
			return rejectWithValue('Server Error');
		}

		return data;
	}
)

const userInfoSlice = createSlice({
	name: 'subscription',
	initialState,
	reducers: {
		setUserInfo(state, action: PayloadAction<User>) {

		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUserInfo.pending, state => {
				state.loading = true;
				console.log('pending');
			})
			.addCase(fetchUserInfo.fulfilled, (state, action) => {
				state.user = action.payload[action.meta.arg];
				state.loading = false;
			})
	}
})
// export const {} = userInfoSlice.actions;
export default userInfoSlice.reducer;
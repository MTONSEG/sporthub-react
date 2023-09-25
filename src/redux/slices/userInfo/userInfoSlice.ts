import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import img from '../../../assets/images/subscription/poster.jpg';
import webp from '../../../assets/images/subscription/poster.jpg?as=webp';
import img_m from '../../../assets/images/subscription/poster_mob.jpg';
import webp_m from '../../../assets/images/subscription/poster_mob.jpg?as=webp';
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
	poster_mob: imageType,
	user: User,
	tabList: TabLink[],
}

const initialState: UserInfoType = {
	loading: false,
	poster: { img, webp },
	poster_mob: { img: img_m, webp: webp_m },
	subscribers: {
		iconID: 'subscribers',
		text: 'Subscribers'
	},
	videos: {
		iconID: 'videos',
		text: 'Videos'
	},
	views: {
		iconID: 'views',
		text: 'Views'
	},
	user: null,
	tabList: [
		{
			id: uuid(),
			title: 'Video',
			path: 'video'
		},
		{
			id: uuid(),
			title: 'Bio',
			path: 'bio'
		},
		{
			id: uuid(),
			title: 'Store',
			path: 'store'
		},
		{
			id: uuid(),
			title: 'Playlists',
			path: 'playlist'
		}
	]
}

export const fetchUserInfo = createAsyncThunk<UserObject, string | number, { rejectValue: string }>(
	'users/fetchUserInfo',
	async (uid, { rejectWithValue }) => {
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
			})
			.addCase(fetchUserInfo.fulfilled, (state, action) => {
				state.user = action.payload[action.meta.arg];
				state.loading = false;
			})
	}
})
// export const {} = userInfoSlice.actions;
export default userInfoSlice.reducer;
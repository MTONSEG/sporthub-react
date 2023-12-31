import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import img from '../../../assets/images/subscription/poster.jpg';
import webp from '../../../assets/images/subscription/poster.jpg?as=webp';
import img_m from '../../../assets/images/subscription/poster_mob.jpg';
import webp_m from '../../../assets/images/subscription/poster_mob.jpg?as=webp';
import { imageType } from '../auth/sliderAuthSlice';
import uuid from 'react-uuid';
import { User, UserObject } from '../home/userSlice';
import { NumStrNullType } from '../auth/singupSlice';

export type UserTabPathTypes = 'video' | 'bio' | 'store' | 'playlist'|'mind'|'body'|'soul';

export type TabLink = {
	id: string,
	title: string,
	value: UserTabPathTypes
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
	users: UserObject,
	tabList: TabLink[],
	loggedUID: NumStrNullType,
	tabValue: UserTabPathTypes
}

const initialState: UserInfoType = {
	loading: false,
	loggedUID: '',
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
	users: null,
	tabValue: 'video',
	tabList: [
		{
			id: uuid(),
			title: 'Video',
			value: 'video'
		},
		{
			id: uuid(),
			title: 'Bio',
			value: 'bio'
		},
		{
			id: uuid(),
			title: 'Store',
			value: 'store'
		},
		{
			id: uuid(),
			title: 'Playlists',
			value: 'playlist'
		}
	]
}


const userInfoSlice = createSlice({
	name: 'subscription',
	initialState,
	reducers: {
		setTabValue(state, action: PayloadAction<UserTabPathTypes>) {
			state.tabValue = action.payload;
		}
	}
})
export const {setTabValue} = userInfoSlice.actions;
export default userInfoSlice.reducer;
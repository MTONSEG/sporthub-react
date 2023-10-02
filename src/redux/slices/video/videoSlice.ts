import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TabLink } from '../userInfo/userInfoSlice';
import uuid from 'react-uuid';
import { ONLY_VIDEO_ROUTE, PLAYLIST_VIDEO_ROUTE } from '../../../routes/routes';
import { inputType } from '../auth/singinSlice';
import { NumStrNullType } from '../auth/singupSlice';
import { UserType } from '../home/userSlice';

type ILinkWithActive = {
	id: string | number,
	title: string,
	path: string,
	active: boolean
}
export type VideoFileType = {
	videoURL: string,
	category: string,
	title: string,
	authorUID: NumStrNullType,
	description: string,
	shopifyLink: string
}

export type ItemSelectType = {
	id: string | number,
	title: string,
	value: string,
	selected: boolean
}

export interface ISelect extends inputType {
	list: ItemSelectType[]
}

type VideoStateType = {
	titleAddVideo: string,
	titleAddPlaylist: string,
	titleViewAll: string,
	titlePublishBtn: string,
	titleProcessing: string,
	titleUpload: string,
	titleAdding: string,
	titlePreviewMob: string,
	textUpload: string,
	linkList: ILinkWithActive[],
	tabList: TabLink[],
	title: inputType,
	category: ISelect,
	description: inputType,
	shopifyURL: inputType,
	videoFileName: string,
	videoURL: string,
	videoPoster: string,
	videoPosterURL: string,
	titleChooseBtn: string,
	titleDrag: string,
	loading: boolean,
}

const initialState: VideoStateType = {
	titleAddVideo: 'Add new video',
	titleAddPlaylist: 'Create new playlist',
	titleViewAll: 'View all',
	titlePublishBtn: 'Publish',
	titleChooseBtn: 'Or choose files',
	titleProcessing: 'Processing will begin shortly',
	titleUpload: 'Drag and drop photo to upload',
	titleAdding: 'Adding a new video',
	titleDrag: 'Drag and drop videos to upload',
	titlePreviewMob: 'Upload the image preview',
	textUpload: 'Information about adding photo. Amet minim mollit non deserunt ullamco est sit',
	linkList: [
		{
			id: uuid(),
			title: 'Your video',
			path: ONLY_VIDEO_ROUTE,
			active: true
		},
		{
			id: uuid(),
			title: 'Playlists',
			path: PLAYLIST_VIDEO_ROUTE,
			active: false
		},
	],
	tabList: [
		{
			id: uuid(),
			title: 'Mind',
			value: 'mind'
		},
		{
			id: uuid(),
			title: 'Body',
			value: 'body'
		},
		{
			id: uuid(),
			title: 'Soul',
			value: 'soul'
		},
	],
	title: {
		title: 'Title',
		placeholder: 'Video Name',
		value: ''
	},
	category: {
		title: 'Category',
		placeholder: 'Select category',
		value: '',
		list: [
			{
				id: uuid(),
				title: 'Mind',
				value: 'mind',
				selected: false,
			},
			{
				id: uuid(),
				title: 'Body',
				value: 'body',
				selected: false,
			},
			{
				id: uuid(),
				title: 'Soul',
				value: 'soul',
				selected: false,
			}
		]
	},
	description: {
		title: 'Description',
		placeholder: 'Description',
		value: ''
	},
	shopifyURL: {
		title: 'Add Shopify link',
		placeholder: 'Add link on product',
		value: ''
	},
	videoFileName: '',
	videoURL: '',
	videoPoster: '',
	videoPosterURL: '',
	loading: false
}

export const uploadVideo =
	createAsyncThunk<void, NumStrNullType, {
		rejectValue: string,
		state: { users: UserType, videos: VideoStateType }
	}>(
		'users/uploadVideo',
		async (uid, { rejectWithValue, getState, dispatch }) => {
			try {
				const URL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/users/${uid}/videos.json`
				const state = getState().videos;

				const video: VideoFileType = {
					videoURL: state.videoURL,
					title: state.title.value,
					category: state.category.value,
					authorUID: uid,
					description: state.description.value,
					shopifyLink: state.shopifyURL.value
				}

				let res = await fetch(URL, {
					method: 'POST',
					body: JSON.stringify(video),
					headers: {
						'Content-Type': 'application/json',
					}
				})

				console.log(res.json())
			} catch (error) {
				rejectWithValue(error);
			}
		})

const videoSlice = createSlice({
	name: 'users/videoSlice',
	initialState,
	reducers: {
		setActiveVideoLink(state, action: PayloadAction<string | number>) {
			state.linkList.forEach(el => {
				if (el.id === action.payload) {
					el.active = true;
				} else {
					el.active = false;
				}
			})
		},
		setTitleValue(state, action: PayloadAction<string>) {
			state.title.value = action.payload;
		},
		setCategoryValue(state, action: PayloadAction<number | string>) {
			state.category.list.forEach(el => {
				if (el.id === action.payload) {
					el.selected = true;
					state.category.value = el.title;
				} else {
					el.selected = false;
				}
			})
		},
		setDescriptionVideoValue(state, action: PayloadAction<string>) {
			state.description.value = action.payload;
		},
		setShopifyURLValue(state, action: PayloadAction<string>) {
			state.shopifyURL.value = action.payload;
		},
		setVideoFileName(state, action: PayloadAction<string>) {
			state.videoFileName = action.payload;
		},
		setVideoURL(state, action: PayloadAction<string>) {
			state.videoURL = action.payload;
		},
		setVideoPoster(state, action: PayloadAction<string>) {
			state.videoPoster = action.payload;
		},
		setVideoPosterURL(state, action: PayloadAction<string>) {
			state.videoPosterURL = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(uploadVideo.pending, state => {
				state.loading = true;
			})
			.addCase(uploadVideo.fulfilled, state => {
				
				
				state.loading = false;
		})
	}
})
export const { setActiveVideoLink, setCategoryValue, setDescriptionVideoValue, setShopifyURLValue, setTitleValue, setVideoFileName, setVideoPoster, setVideoPosterURL, setVideoURL } = videoSlice.actions;
export default videoSlice.reducer;
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TabLink, UserTabPathTypes } from '../userInfo/userInfoSlice';
import uuid from 'react-uuid';
import { inputType } from '../auth/singinSlice';
import { NumStrNullType } from '../auth/singupSlice';
import { UserType } from '../home/userSlice';
import { alertType, setMessage, showAlert } from '../alert/alertSlice';
import { getUserUID } from '../../../utils/getUserUID';

type ILinkWithActive = {
	id: string | number,
	title: string,
	path: string,
	active: boolean
}

export type Comment = {
	uid?: string | number,
	text: string,
	author: string | number,
	created: Date,
	like?: number,
	dislike?: number
}

export type VideoFileType = {
	uid?: string | number,
	videoURL: string,
	posterURL: string | null,
	category: string,
	title: string,
	author: NumStrNullType,
	description: string,
	shopifyLink: string,
	created: Date,
	selected?: boolean
}
export type VideoFileObjectType = { [key: string]: VideoFileType }

export type ItemSelectType = {
	id: string | number,
	title: string,
	value: string,
	selected: boolean
}

export interface ISelect extends inputType {
	list: ItemSelectType[]
}

export type PlaylistType = {
	uid?: string | number,
	title: string,
	description: string,
	category: string,
	date: Date,
	update?: Date,
	views?: number,
	list: VideoFileType[],
	author: NumStrNullType
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
	titleEditPlaylist: string,
	titleSendBtn: string,
	titleComments: string,
	textUpload: string,
	titleSaveBtn: string,
	linkList: ILinkWithActive[],
	tabList: TabLink[],
	title: inputType,
	category: ISelect,
	description: inputType,
	shopifyURL: inputType,
	titlePlaylist: inputType,
	descriptionPlaylist: inputType,
	searchVideoInput: inputType,
	categoryPlaylist: ISelect,
	commentField: inputType,
	videoFileName: string,
	videoURL: string,
	videoPoster: string,
	videoPosterURL: string,
	titleChooseBtn: string,
	titleDrag: string,
	loading: boolean,
	disabledBtn: boolean,
	videoTabValue: UserTabPathTypes,
	videos: { [key: string]: VideoFileType } | null,
	videosList: VideoFileType[],
	previewPath: string,
	currentPlaylist: VideoFileType[],
	playlists: { [key: string]: PlaylistType },
	playlistsArr: PlaylistType[],
	searchVideosList: VideoFileType[],
	playlistView: PlaylistType,
	isEditPlaylist: boolean,
	editPlaylistObj: { [key: string | number]: boolean },
	comments: { [key: string | number]: Comment },
	commentList: Comment[]
}

const initialState: VideoStateType = {
	titleAddVideo: 'Add new video',
	titleAddPlaylist: 'Create new playlist',
	titleEditPlaylist: 'Edit playlist',
	titleSaveBtn: 'Save',
	titleViewAll: 'View all',
	titlePublishBtn: 'Publish',
	titleChooseBtn: 'Or choose files',
	titleProcessing: 'Processing will begin shortly',
	titleUpload: 'Drag and drop photo to upload',
	titleAdding: 'Adding a new video',
	titleDrag: 'Drag and drop videos to upload',
	titlePreviewMob: 'Upload the image preview',
	titleComments: 'Comments',
	titleSendBtn: 'Send',
	textUpload: 'Information about adding photo. Amet minim mollit non deserunt ullamco est sit',
	disabledBtn: true,
	currentPlaylist: [],
	linkList: [
		{
			id: uuid(),
			title: 'Your video',
			path: '/video/',
			active: true
		},
		{
			id: uuid(),
			title: 'Playlists',
			path: '/video/playlist/',
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
	titlePlaylist: {
		title: 'Playlist name',
		placeholder: 'Enter playlist name',
		value: ''
	},
	searchVideoInput: {
		title: '',
		placeholder: 'Search',
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
	categoryPlaylist: {
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
	descriptionPlaylist: {
		title: 'Description',
		placeholder: 'Enter description',
		value: ''
	},
	shopifyURL: {
		title: 'Add Shopify link',
		placeholder: 'Add link on product',
		value: ''
	},
	commentField: {
		title: '',
		placeholder: 'Enter your comment',
		value: ''
	},
	videoFileName: '',
	videoURL: '',
	videoPoster: '',
	videoPosterURL: '',
	loading: false,
	videos: null,
	videosList: [],
	videoTabValue: 'mind',
	previewPath: null,
	playlists: null,
	playlistsArr: [],
	searchVideosList: [],
	playlistView: null,
	isEditPlaylist: true,
	editPlaylistObj: {},
	comments: {},
	commentList: []
}

export const uploadVideo =
	createAsyncThunk<void, NumStrNullType, {
		rejectValue: string,
		state: { users: UserType, videos: VideoStateType, alert: alertType }
	}>(
		'users/uploadVideo',
		async (uid, { rejectWithValue, getState, dispatch }) => {
			try {
				const URL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/users/${uid}/videos.json`;
				const videosURL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/videos.json`;
				const state = getState();

				const createDate: Date = new Date();

				const video: VideoFileType = {
					videoURL: state.videos.videoURL,
					posterURL: state.videos.videoPosterURL,
					title: state.videos.title.value,
					category: state.videos.category.value,
					author: getUserUID().uid,
					description: state.videos.description.value,
					shopifyLink: state.videos.shopifyURL.value,
					created: createDate
				}

				await fetch(videosURL, {
					method: 'POST',
					body: JSON.stringify(video),
					headers: {
						'Content-Type': 'application/json',
					}
				})
					.then(res => res.json())
					.then(async (resDB) => {
						const id: NumStrNullType = resDB.name;
						const videoItem: { [key: string]: boolean } = {
							[id]: true
						}

						await fetch(URL, {
							method: 'PATCH',
							body: JSON.stringify(videoItem),
							headers: {
								'Content-Type': 'application/json',
							}
						})
							.then(res => {
								dispatch(setMessage(state.alert.successVideoUpload))
								dispatch(showAlert(true));

								setTimeout((): void => {
									dispatch(showAlert(false));
								}, 5000);
							})
					})
				dispatch(getVideos(getUserUID().uid));
			} catch (error) {
				rejectWithValue(error);
			}
		})

export const getVideos = createAsyncThunk<VideoFileObjectType, 'user' | 'all' | NumStrNullType, { rejectValue: string }>(
	'users/getVideos',
	async (str, { rejectWithValue }) => {
		try {
			let res = await fetch(`https://sporthub-8cd3f-default-rtdb.firebaseio.com/videos.json`);

			return res.json();
		}
		catch (error) {
			rejectWithValue(error);
		}
	}
)


export const setPlaylist = createAsyncThunk<void, null, {
	rejectValue: string,
	state: { users: UserType, videos: VideoStateType, alert: alertType }
}>(
	'users/setPlaylist',
	async (_, { rejectWithValue, getState, dispatch }) => {
		const URL: string = 'https://sporthub-8cd3f-default-rtdb.firebaseio.com/playlists.json';

		const { videos } = getState();

		const body: PlaylistType = {
			title: videos.titlePlaylist.value,
			description: videos.descriptionPlaylist.value,
			category: videos.categoryPlaylist.value,
			views: 0,
			date: new Date(),
			author: getUserUID().uid,
			list: videos.currentPlaylist
		}
		try {
			await fetch(URL, {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'application/json',
				}
			})
				.then(res => res.json())
				.then(async res => {
					await fetch(`https://sporthub-8cd3f-default-rtdb.firebaseio.com/users/${getUserUID().uid}/playlists.json`, {
						method: 'PATCH',
						body: JSON.stringify({
							[res.name]: true
						}),
						headers: {
							'Content-Type': 'application/json'
						}
					})
				})

			dispatch(clearPlaylist());
		} catch (e) {
			rejectWithValue(e);
		}
	}
)

export const updatePlaylist = createAsyncThunk<void, string | number, {
	rejectValue: string,
	state: { videos: VideoStateType }
}>(
	'users/updatePlaylist',
	async (uid, { rejectWithValue, getState, dispatch }) => {
		try {
			const URL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/playlists/${uid}.json`;
			const videos: VideoStateType = getState().videos;

			await fetch(URL, {
				method: 'PATCH',
				body: JSON.stringify({
					title: videos.titlePlaylist.value,
					description: videos.descriptionPlaylist.value,
					category: videos.categoryPlaylist.value,
					views: 0,
					update: new Date(),
					list: videos.currentPlaylist
				})
			}).then(res => {
				dispatch(getCurrentPlaylist(uid));
			})
		}
		catch (e) {
			rejectWithValue(e);
		}
	}
)

export const deletePlaylist = createAsyncThunk<void, string | number, {
	rejectValue: string,
	state: { videos: VideoStateType }
}>(
	'users/deletePlaylist',
	async (uid, { rejectWithValue, dispatch }) => {
		try {
			const PlaylistURL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/playlists/${uid}.json`;
			const UserPlaylistURL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/users/${getUserUID().uid}/playlists/${uid}.json`;

			await fetch(PlaylistURL, { method: 'DELETE' })
				.then(async res => {
					await fetch(UserPlaylistURL, { method: 'DELETE' })
					return res.json()
				})
				.then(res => {
					dispatch(getPlaylist());
				})
		}
		catch (e) {
			rejectWithValue(e);
		}
	}
)


export const getPlaylist = createAsyncThunk<{ [key: string]: PlaylistType }, null, { rejectValue: string }>(
	'users/getPlaylist',
	async (_, { rejectWithValue }) => {
		try {
			let res = await fetch(`https://sporthub-8cd3f-default-rtdb.firebaseio.com/playlists.json`);
			let data: { [key: string]: PlaylistType } = await res.json();

			return data;
		}
		catch (error) {
			rejectWithValue(error);
		}
	}
)

export const getCurrentPlaylist = createAsyncThunk<PlaylistType, NumStrNullType, { rejectValue: string }>(
	'users/getCurrentPlaylist',
	async (uid, { rejectWithValue, dispatch }) => {
		try {
			let res = await fetch(`https://sporthub-8cd3f-default-rtdb.firebaseio.com/playlists/${uid}.json`);
			let data: PlaylistType = await res.json();



			return data;
		}
		catch (error) {
			rejectWithValue(error);
		}
	}
)

export const setVideoComment = createAsyncThunk<void, string | null, {
	rejectValue: string,
	state: { videos: VideoStateType }
}>(
	'users/setVideoComment',
	async (uid, { rejectWithValue, getState, dispatch }) => {
		try {
			const state: VideoStateType = getState().videos;

			const videosURL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/videos/${uid}/comments.json`;

			const comment: Comment = {
				text: state.commentField.value,
				author: getUserUID().uid,
				created: new Date()
			}

			await fetch(videosURL, {
				method: 'POST',
				body: JSON.stringify(comment),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			dispatch(setCommentVideoValue(''));
			dispatch(getVideoComments(uid));
		} catch (e) {
			rejectWithValue(e);
		}
	}
);

export const getVideoComments = createAsyncThunk<{ [key: string | number]: Comment }, string | number, { rejectValue: string }>(
	'users/getVideoComments',
	async (uid, { rejectWithValue, dispatch }) => {
		try {
			let res = await fetch(`https://sporthub-8cd3f-default-rtdb.firebaseio.com/videos/${uid}/comments.json`);
			let data: { [key: string | number]: Comment } = await res.json();

			return data;
		}
		catch (error) {
			rejectWithValue(error);
		}
	}
)



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
		setActivePlaylist(state) {
			state.linkList.forEach(el => {
				if (el.title === 'Playlists') {
					el.active = true;
				} else {
					el.active = false;
				}
			})
		},
		setActiveVideo(state) {
			state.linkList.forEach(el => {
				if (el.title === 'Your video') {
					el.active = true;
				} else {
					el.active = false;
				}
			})
		},
		setTitleValue(state, action: PayloadAction<string>) {
			state.title.value = action.payload;
		},
		setTitlePlaylistValue(state, action: PayloadAction<string>) {
			state.titlePlaylist.value = action.payload;
		},
		setCategoryValue(state, action: PayloadAction<number | string>) {
			state.category.list.forEach(el => {
				if (el.id === action.payload) {
					el.selected = true;
					state.category.value = el.value;
				} else {
					el.selected = false;
				}
			})
		},
		setCategoryPlaylistValue(state, action: PayloadAction<number | string>) {
			state.categoryPlaylist.list.forEach(el => {
				if (el.id === action.payload) {
					el.selected = true;
					state.categoryPlaylist.value = el.value;
				} else {
					el.selected = false;
				}
			})
		},
		setCategoryPlaylistValueForTitle(state, action: PayloadAction<string>) {
			state.categoryPlaylist.list.forEach(el => {
				if (el.value === action.payload) {
					el.selected = true;
					state.categoryPlaylist.value = el.value;
				} else {
					el.selected = false;
				}
			})
		},
		setDescriptionVideoValue(state, action: PayloadAction<string>) {
			state.description.value = action.payload;
		},

		setCommentVideoValue(state, action: PayloadAction<string>) {
			state.commentField.value = action.payload;
		},
		setSearchVideoValue(state, action: PayloadAction<string>) {
			state.searchVideoInput.value = action.payload;

			state.searchVideosList = state.videosList
				.filter(el => el.title.toLowerCase().includes(action.payload.toLowerCase()));
		},
		setDescriptionPlaylistValue(state, action: PayloadAction<string>) {
			state.descriptionPlaylist.value = action.payload;
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
		enableBtnSave(state) {
			state.disabledBtn = false;
		},
		disableBtnSave(state) {
			state.disabledBtn = true;
		},
		setVideoTabValue(state, action: PayloadAction<UserTabPathTypes>) {
			state.videoTabValue = action.payload;
		},
		sortVideoList(state) {

			let list: VideoFileType[] = [];

			for (let key in state.videos) {
				list.push({ uid: key, ...state.videos[key] })
			}

			state.videosList = list
				.filter(el => (
					el.category === state.videoTabValue &&
					el.author === getUserUID().uid
				));
		},
		sortPlaylist(state) {


			let list: PlaylistType[] = [];

			for (let key in state.playlists) {
				let obj: PlaylistType = {
					uid: key,
					...state.playlists[key]
				}

				list.push(obj);
			}

			state.playlistsArr = list
				.reverse()
				.filter(el => el.category === state.videoTabValue);
		},
		setPreviewPath(state, action: PayloadAction<string>) {
			state.previewPath = action.payload;
		},
		addVideoToPlaylist(state, action: PayloadAction<VideoFileType>) {
			state.currentPlaylist.push(action.payload);

			state.videosList = state.videosList.map(el => {
				if (action.payload.uid === el.uid) {
					el.selected = true;
				}

				return el;
			})

			state.searchVideosList = state.searchVideosList.map(el => {
				if (action.payload.uid === el.uid) {
					el.selected = true;
				}

				return el;
			})
		},
		removeVideoFromPlaylist(state, action: PayloadAction<NumStrNullType>) {
			state.currentPlaylist = state.currentPlaylist.filter(el => {
				if (el.uid !== action.payload) {
					return el;
				}
			});


			state.videosList = state.videosList.map(el => {
				if (el.uid === action.payload) {
					el.selected = false;
				}
				return el;
			})

			state.searchVideosList = state.searchVideosList.map(el => {
				if (el.uid === action.payload) {
					el.selected = false;
				}
				return el;
			})
		},
		initialPlaylistVideoEdit(state) {

			let videos: VideoFileType[] = [];
			let obj: { [key: string | number]: boolean } = {};

			if (state.playlistView.list.length) {
				state.playlistView.list.forEach(video => {
					videos.push({ ...video, selected: true });
					state.currentPlaylist.push(video);
					obj[video.uid] = true;
				})

				state.searchVideosList = videos;
				state.editPlaylistObj = obj;
			}




		},
		setCurrentPlaylist(state, action: PayloadAction<VideoFileType[]>) {
			state.currentPlaylist = action.payload;
		},
		clearPlaylist(state) {
			state.titlePlaylist.value = '';
			state.categoryPlaylist.value = '';
			state.descriptionPlaylist.value = '';
			state.currentPlaylist = [];
			state.searchVideosList = [];
		},
		setEditPlaylist(state, action: PayloadAction<boolean>) {
			state.isEditPlaylist = action.payload;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(uploadVideo.pending, state => {
				state.loading = true;
			})
			.addCase(uploadVideo.fulfilled, state => {
				state.title.value = '';
				state.category.value = '';
				state.description.value = '';
				state.shopifyURL.value = '';
				state.videoPosterURL = '';
				state.videoURL = '';
				state.videoFileName = '';

				state.loading = false;
			})
			.addCase(getVideos.pending, state => {
				state.loading = true;
			})
			.addCase(getVideos.fulfilled, (state, action) => {
				if (action.payload) {
					state.videos = action.payload;

					let list: VideoFileType[] = [];

					for (let key in action.payload) {
						list.push({ uid: key, selected: false, ...action.payload[key] })
					}

					if (action.meta.arg === 'all') {
						state.videosList = list.reverse();
					} else if (action.meta.arg === 'user') {
						state.videosList = list.reverse()
							.filter(el => (
								el.category === state.videoTabValue && el.author === getUserUID().uid
							));
					} else {
						state.videosList = list.reverse()
							.filter(el => (
								el.author === action.meta.arg
							));
					}
					if (!state.searchVideosList.length) {
						state.searchVideosList = list.reverse();
					} else {
						for (let item of list) {
							if (!state.editPlaylistObj[item.uid]) {
								state.searchVideosList.push(item);
							}
						}
					}
				}

				state.loading = false;
			})
			.addCase(getPlaylist.pending, state => {
				state.loading = true;
			})
			.addCase(getPlaylist.fulfilled, (state, action) => {
				state.playlists = action.payload;

				let list: PlaylistType[] = [];

				for (let key in action.payload) {
					let obj: PlaylistType = {
						uid: key,
						...action.payload[key]
					}

					list.push(obj);
				}
				list.reverse();

				state.playlistsArr = list
					.filter(el => el.category === state.videoTabValue);

				state.loading = false;
			})
			.addCase(getCurrentPlaylist.pending, state => {
				state.loading = true;
			})
			.addCase(getCurrentPlaylist.fulfilled, (state, action) => {
				state.playlistView = action.payload;

				state.loading = false;
			})
			.addCase(setVideoComment.pending, state => {
				state.loading = true;
			})
			.addCase(setVideoComment.fulfilled, (state) => {

				state.loading = false;
			})
			.addCase(getVideoComments.pending, state => {
				state.loading = true;
			})
			.addCase(getVideoComments.fulfilled, (state, action) => {
				state.comments = action.payload;

				let list: Comment[] = [];

				for (let key in action.payload) {
					list.push({ uid: key, ...action.payload[key] });
				}

				state.commentList = list.reverse();

				state.loading = false;
			})


		getVideoComments
	}
})
export const { setActiveVideoLink, setCategoryValue, setDescriptionVideoValue, setShopifyURLValue, setTitleValue, setVideoFileName, setVideoPoster, setVideoPosterURL, setVideoURL, enableBtnSave, disableBtnSave, setVideoTabValue, sortVideoList, setPreviewPath, setCategoryPlaylistValue, setDescriptionPlaylistValue, setTitlePlaylistValue, setSearchVideoValue, removeVideoFromPlaylist, addVideoToPlaylist, clearPlaylist, setActivePlaylist, sortPlaylist, setActiveVideo, setCategoryPlaylistValueForTitle, setEditPlaylist, setCurrentPlaylist, initialPlaylistVideoEdit, setCommentVideoValue } = videoSlice.actions;
export default videoSlice.reducer;
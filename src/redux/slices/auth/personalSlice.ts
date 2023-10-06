import { createAsyncThunk, createSlice, PayloadAction, Store } from "@reduxjs/toolkit";
import { inputType, setPhotoURLCurrentUser, singInType } from "./singinSlice";
import uuid from "react-uuid";
import { User } from '../home/userSlice';
import { NumStrNullType } from './singupSlice';
import { getUserUID } from '../../../utils/getUserUID';
import { BaseUser } from '../../../components/containers/Main/Main';

export type uploadType = {
	title: string,
	text: string,
	accept: string,
}
export type genderType = 'male' | 'female' | 'none';

export type birthdayType = {
	title: string,
	placeholder: string,
	dateMask: string,
	maskChar: string,
	value?: string
}
export type radioType = {
	id: string | number,
	title: string,
	value: genderType,
}
export type radioListType = {
	value?: genderType
	title: string,
	list: radioType[]
}

export type personalAuthType = {
	loading: boolean,
	gender: string,
	title: string,
	btnNext: string,
	btnBack: string,
	btnProfile: string,
	btnChange: string,
	posterFileName: string,
	posterURL: string,
	posterPreviewURL: string
	photoFileName: string,
	photoURL: string,
	photoPreviewURL: string,
	upload: uploadType,
	uploadPoster: uploadType,
	birthday: birthdayType,
	firstName: inputType,
	lastName: inputType,
	address: inputType,
	description: inputType,
	vimeo: inputType,
	facebook: inputType,
	instagram: inputType,
	twitter: inputType,
	businessName: inputType,
	radio: radioListType,
	user: User

}

const initialState: personalAuthType = {
	loading: false,
	gender: '',
	title: 'Personal Information',
	upload: {
		accept: '.jpg, .png, .jpeg',
		title: 'Information about adding photo',
		text: 'Information about adding photo. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
	},
	uploadPoster: {
		accept: '.jpg, .png, .jpeg',
		title: 'Information about adding cover',
		text: 'Information about adding photo. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
	},
	btnNext: 'Finish',
	btnBack: 'Back',
	btnProfile: 'Save',
	btnChange: 'Change file',
	birthday: {
		value: '',
		title: 'Date of birthday',
		placeholder: 'MM.DD.YYYY',
		dateMask: '99.99.9999',
		maskChar: '_'
	},
	firstName: {
		value: '',
		title: 'First Name',
		placeholder: 'Your First Name',
	},
	lastName: {
		value: '',
		title: 'Last Name',
		placeholder: 'Your Last Name',
	},
	address: {
		value: '',
		title: 'Address',
		placeholder: 'Your Address',
	},
	description: {
		value: '',
		title: 'Description',
		placeholder: 'Description',
	},
	vimeo: {
		value: '',
		title: 'Vimeo account',
		placeholder: 'Add your Vimeo account',
	},
	facebook: {
		value: '',
		title: 'Facebook  account',
		placeholder: 'Add your Facebook account',
	},
	instagram: {
		value: '',
		title: 'Instagram account',
		placeholder: 'Add your Instagram account',
	},
	twitter: {
		value: '',
		title: 'Twitter account',
		placeholder: 'Add your Twitter account',
	},
	businessName: {
		value: '',
		title: 'LLC',
		placeholder: 'Your LLC',
	},
	radio: {
		value: 'none',
		title: 'Gender',
		list: [
			{ id: uuid(), title: 'Male', value: 'male' },
			{ id: uuid(), title: 'Female', value: 'female' },
			{ id: uuid(), title: 'None', value: 'none' },
		]
	},
	photoFileName: '',
	photoURL: '',
	photoPreviewURL: '',
	posterFileName: '',
	posterURL: '',
	posterPreviewURL: '',
	user: null
}


export const fetchPersonalData =
	createAsyncThunk<User, NumStrNullType, { rejectValue: string }>(
		'user/fetchPersonalData',
		async (uid, { rejectWithValue }) => {
			try {
				const URL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/users/${uid}.json`;

				let res = await fetch(URL);
				let data = await res.json();
				return data;
			} catch (error) {
				rejectWithValue(error)
			}
		}
	)

export const setPersonalData =
	createAsyncThunk<void, NumStrNullType, {
		rejectValue: string,
		state: { personalAuth: personalAuthType }
	}>(
		'users/setPersonalData',
		async (uid, { rejectWithValue, getState }) => {
			try {
				const URL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/users/${uid}.json`;
				const state = getState().personalAuth;
				const data: User = {
					firstName: state.firstName.value,
					lastName: state.lastName.value,
					bod: state.birthday.value,
					address: state.address.value,
					businessName: state.businessName.value,
					description: state.description.value,
					vimeo: state.vimeo.value,
					instagram: state.instagram.value,
					facebook: state.facebook.value,
					twitter: state.twitter.value,
					gender: state.radio.value
				}

				let res = await fetch(URL, {
					method: 'PATCH',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json',
					}
				})

				console.log(res.json());

			} catch (error) {
				rejectWithValue(error)
			}
		}
	)

export const deletePhoto =
	createAsyncThunk<void, NumStrNullType, { rejectValue: string, }>(
		'users/deletePhoto',
		async (uid, { rejectWithValue, dispatch }) => {
			try {
				const photoURL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/users/${uid}/photoURL.json`;
				const photoNameURL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/users/${uid}/photoName.json`

				await fetch(photoURL, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
					}
				}).then(res => {
					dispatch(setPhotoURLCurrentUser(''));
				})

				await fetch(photoNameURL, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
					}
				})

			} catch (error) {
				rejectWithValue(error)
			}
		}
	)
export const deletePoster =
	createAsyncThunk<void, NumStrNullType, { rejectValue: string }>(
		'users/deletePoster',
		async (uid, { rejectWithValue, dispatch }) => {
			try {
				const posterURL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/users/${uid}/posterURL.json`;
				const posterNameURL: string = `https://sporthub-8cd3f-default-rtdb.firebaseio.com/users/${uid}/posterName.json`

				await fetch(posterURL, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
					}
				})

				await fetch(posterNameURL, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
					}
				})
			} catch (error) {
				rejectWithValue(error)
			}
		}
	)

const personalSlice = createSlice({
	name: 'forgotPassword',
	initialState,
	reducers: {
		setFirstNameValue(state, action: PayloadAction<string>) {
			state.firstName.value = action.payload;
		},
		setLastNameValue(state, action: PayloadAction<string>) {
			state.lastName.value = action.payload;
		},
		setAddressValue(state, action: PayloadAction<string>) {
			state.address.value = action.payload;
		},
		setDescriptionValue(state, action: PayloadAction<string>) {
			state.description.value = action.payload;
		},
		setVimeoValue(state, action: PayloadAction<string>) {
			state.vimeo.value = action.payload;
		},
		setFacebookValue(state, action: PayloadAction<string>) {
			state.facebook.value = action.payload;
		},
		setInstagramValue(state, action: PayloadAction<string>) {
			state.instagram.value = action.payload;
		},
		setTwitterValue(state, action: PayloadAction<string>) {
			state.twitter.value = action.payload;
		},
		setBusinessNameValue(state, action: PayloadAction<string>) {
			state.businessName.value = action.payload;
		},
		setBodValue(state, action: PayloadAction<string>) {
			state.birthday.value = action.payload;
		},
		setGenderValue(state, action: PayloadAction<genderType>) {
			state.radio.value = action.payload;
		},
		setPosterFileName(state, action: PayloadAction<string>) {
			state.posterFileName = action.payload;
		},
		setPosterURL(state, action: PayloadAction<string>) {
			state.posterURL = action.payload;
		},
		setPosterPreviewURL(state, action: PayloadAction<string>) {
			state.posterPreviewURL = action.payload;
		},
		setPhotoFileName(state, action: PayloadAction<string>) {
			state.photoFileName = action.payload;
		},
		setPhotoURL(state, action: PayloadAction<string>) {
			state.photoURL = action.payload;
		},
		setPhotoPreviewURL(state, action: PayloadAction<string>) {
			state.photoPreviewURL = action.payload;
		},
		clearPoster(state) {
			state.posterPreviewURL = '';
			state.posterFileName = '';
		},
		clearPhoto(state) {
			state.photoPreviewURL = '';
			state.photoFileName = '';
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchPersonalData.pending, state => {
				state.loading = true;
			})
			.addCase(fetchPersonalData.fulfilled, (state, action) => {
				state.user = action.payload;

				state.firstName.value = action.payload.firstName;
				state.lastName.value = action.payload.lastName;

				if (action.payload.address) state.address.value = action.payload.address;
				if (action.payload.description) state.description.value = action.payload.description;
				if (action.payload.vimeo) state.vimeo.value = action.payload.vimeo;
				if (action.payload.facebook) state.facebook.value = action.payload.facebook;
				if (action.payload.instagram) state.instagram.value = action.payload.instagram;
				if (action.payload.twitter) state.twitter.value = action.payload.twitter;
				if (action.payload.businessName) state.businessName.value = action.payload.businessName;
				if (action.payload.bod) state.birthday.value = action.payload.bod;
				if (action.payload.gender) state.radio.value = action.payload.gender;
				if (action.payload.photoURL) state.photoPreviewURL = action.payload.photoURL;
				if (action.payload.posterURL) state.posterPreviewURL = action.payload.posterURL;
				if (action.payload.photoName) state.photoFileName = action.payload.photoName;
				if (action.payload.posterName) state.posterFileName = action.payload.posterName;

				state.loading = false;
			})
			.addCase(setPersonalData.pending, state => {
				state.loading = true;
			})
			.addCase(setPersonalData.fulfilled, state => {
				state.loading = false;
			})
			.addCase(deletePhoto.pending, state => {
				state.loading = true;
			})
			.addCase(deletePhoto.fulfilled, state => {

				state.loading = false;
			})
			.addCase(deletePoster.pending, state => {
				state.loading = true;
			})
			.addCase(deletePoster.fulfilled, state => {
				state.loading = false;
			})
	}
})
export const { setFirstNameValue, setLastNameValue, setAddressValue, setBusinessNameValue, setBodValue, setDescriptionValue, setFacebookValue, setGenderValue, setInstagramValue, setTwitterValue, setVimeoValue, setPhotoFileName, setPhotoPreviewURL, setPhotoURL, setPosterFileName, setPosterPreviewURL, setPosterURL, clearPhoto, clearPoster } = personalSlice.actions;
export default personalSlice.reducer;
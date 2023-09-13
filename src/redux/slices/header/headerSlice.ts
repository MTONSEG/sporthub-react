import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { AUTH_ROUTE, NOTIFY_ROUTE, STORE_ROUTE, VIDEO_ROUTE } from "../../../routes/routes";

export interface ILink {
	id: number | string,
	title: string,
	path: string
}

export interface ILinkWithIcon extends ILink {
	iconID: string
}

type headerLinks = {
	titleBtn: ILink,
	login: boolean,
	links: ILink[],
	menuLinks: ILinkWithIcon[],
	logout: ILinkWithIcon,
	notify: ILinkWithIcon,
	activeMenu: boolean
}

const initialState: headerLinks = {
	login: false,
	titleBtn: {
		id: uuid(),
		title: 'Sign in',
		path: AUTH_ROUTE
	},
	notify: {
		id: uuid(),
		title: 'Notification',
		path: NOTIFY_ROUTE,
		iconID: 'notify'
	},
	links: [
		{
			id: uuid(),
			title: 'Video',
			path: VIDEO_ROUTE
		},
		{
			id: uuid(),
			title: 'Store',
			path: STORE_ROUTE
		},
	],
	menuLinks: [
		{
			id: uuid(),
			title: 'Edit profile',
			path: VIDEO_ROUTE,
			iconID: 'edit'
		},
		{
			id: uuid(),
			title: 'Switch to business account',
			path: '',
			iconID: 'switch'
		},
	],
	logout: {
		id: uuid(),
		title: 'Log out',
		path: '',
		iconID: 'logout'
	},
	activeMenu: false
}

const headerSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {
		setLogin(state, action: PayloadAction<boolean>) {
			state.login = action.payload;
		},
		toggleMenu(state) {
			state.activeMenu = !state.activeMenu
		}
	}
})

export const { setLogin, toggleMenu } = headerSlice.actions;
export default headerSlice.reducer;
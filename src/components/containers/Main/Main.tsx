import React, { useEffect } from "react";
import Header from "../Header/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ADD_PLAYLIST_VIDEO_ROUTE, ADD_VIDEO_ROUTE, AUTH_ROUTE, EDIT_UID_PLAYLIST_VIDEO_ROUTE, ITEM_ID_VIDEO_ROUTE, LATEST_ROUTE, PLAYLIST_UID_VIDEO_ROUTE, PROFILE_ROUTE, UID_USER_WITH_OTHER_ROUTE, VIDEO_WITH_OTHER_ROUTE, VIEW_LATER_ROUTE } from "../../../routes/routes";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { setMessage, showAlert } from "../../../redux/slices/alert/alertSlice";
import { setLogin } from "../../../redux/slices/header/headerSlice";
import { setCurrentUser } from "../../../redux/slices/auth/singinSlice";
import { getUsers, setLoggedUser } from '../../../redux/slices/home/userSlice';
import User from '../../pages/User/User';
import Profile from '../../pages/Profile/Profile';
import Video from '../../pages/Video/Video';
import AddVideo from '../../pages/Video/AddVideo/AddVideo';
import Home from '../../pages/Home/Home';
import Latest from '../../pages/Home/LatestHome/LatestHome';
import ViewVideo from '../../pages/Video/ViewVideo/ViewVideo';
import Loading from '../../ui/atoms/Loading/Loading';
import AddPlaylistVideo from '../../pages/Video/AddPlaylistVideo/AddPlaylistVideo';
import ViewPlaylist from '../../pages/Video/ViewPlaylist/ViewPlaylist';
import EditPlaylistVideo from '../../pages/Video/EditPlaylistVideo/EditPlaylistVideo';

export interface BaseUser {
	uid: string | number,
	name: string,
	email?: string,
	photoURL: string,
	amountSubscribers?: number
}



const Main: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { users } = useAppSelector(state => state.users);

	useEffect(() => {
		dispatch(getUsers());

		const user: BaseUser = JSON.parse(localStorage.getItem('sh-current'));

		if (user) {
			dispatch(setLogin(true));
			if (user.name) {
				dispatch(setCurrentUser({ name: user.name, photoURL: user.photoURL }));
				dispatch(setLoggedUser(user))
			}

			if (!sessionStorage.getItem('welcome')) {
				dispatch(setMessage(`Welcome ${user.name}`))
				dispatch(showAlert(true));

				setTimeout((): void => {
					dispatch(showAlert(false));
				}, 1000)
			}

			window.sessionStorage.setItem('welcome', 'true');
		} else {
			navigate(AUTH_ROUTE)
		}
	}, [])

	if (!users) return <Loading />

	return (
		<>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path={LATEST_ROUTE} element={<Latest title='Lates Video' />} />
				<Route path={VIEW_LATER_ROUTE} element={<Latest title='View later' />} />
				<Route path={UID_USER_WITH_OTHER_ROUTE} element={<User />} />
				<Route path={PROFILE_ROUTE} element={<Profile />} />
				<Route path={VIDEO_WITH_OTHER_ROUTE} element={<Video />} />
				<Route path={ADD_VIDEO_ROUTE} element={<AddVideo />} />
				<Route path={ADD_PLAYLIST_VIDEO_ROUTE} element={<AddPlaylistVideo />} />
				<Route path={EDIT_UID_PLAYLIST_VIDEO_ROUTE} element={<EditPlaylistVideo />} />
				<Route path={ITEM_ID_VIDEO_ROUTE} element={<ViewVideo />} />
				<Route path={PLAYLIST_UID_VIDEO_ROUTE} element={<ViewPlaylist/>} />
			</Routes>
		</>
	)
}

export default Main;
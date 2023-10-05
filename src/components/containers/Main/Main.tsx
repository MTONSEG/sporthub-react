import React, { useEffect } from "react";
import Header from "../Header/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AUTH_ROUTE } from "../../../routes/routes";
import { useAppDispatch } from "../../../hooks/hooks";
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


	return (
		<>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/latest" element={<Latest title='Lates Video' />} />
				<Route path='/later' element={<Latest title='View later' />} />
				<Route path='/user/:uid/*' element={<User />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/video/*' element={<Video />} />
				<Route path='/video/add' element={<AddVideo />} />
				<Route path='/view/:id' element={<ViewVideo />} />
			</Routes>
		</>
	)
}

export default Main;
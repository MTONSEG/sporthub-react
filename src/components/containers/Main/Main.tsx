import React, { useEffect } from "react";
import Header from "../Header/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AUTH_ROUTE } from "../../../routes/routes";
import Loading from "../../ui/atoms/Loading/Loading";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { setMessage, showAlert } from "../../../redux/slices/alert/alertSlice";
import { setLogin } from "../../../redux/slices/header/headerSlice";
import { setCurrentUser } from "../../../redux/slices/auth/singinSlice";
import Container from "../Container/Container";
import { getUsers, setLoggedUser } from '../../../redux/slices/home/userSlice';
import User from '../../pages/User/User';

const Home = React.lazy(() => import('../../pages/Home/Home'));
const Latest = React.lazy(() => import('../../pages/Home/LatestHome/LatestHome'));

export interface BaseUser {
	uid: string | number,
	name: string,
	email: string,
	photoURL: string,
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
		<React.Suspense fallback={<Loading />}>
			<Header />
			<Container>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/latest" element={<Latest title='Lates Video' />} />
					<Route path='/later' element={<Latest title='View later' />} />
					<Route path='/user/:uid/*' element={<User />}/>
				</Routes>
			</Container>
		</React.Suspense>
	)
}

export default Main;
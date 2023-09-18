import React, { useEffect } from "react";
import './Main.scss';
import Header from "../Header/Header";
import { Link, Route, Routes } from "react-router-dom";
import { AUTH_CHECK_ROUTE, AUTH_DATA_ROUTE, AUTH_FORGOT_ROUTE, AUTH_REG_ROUTE, AUTH_RESTORE_ROUTE, AUTH_ROUTE, LATEST_ROUTE, VIEW_LATER_ROUTE } from "../../../routes/routes";
import { Auth, getAuth, signOut } from "firebase/auth";
import Loading from "../../ui/atoms/Loading/Loading";
import Navbar from "../../pages/Home/Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { setMessage, showAlert } from "../../../redux/slices/alert/alertSlice";
import { setLogin } from "../../../redux/slices/header/headerSlice";
import { setCurrentUser } from "../../../redux/slices/auth/singinSlice";
import Home from "../../pages/Home/Home";


export interface BaseUser {
	uid: string | number,
	name: string,
	email: string,
	photoURL: string,
}

const Main: React.FC = () => {
	const dispatch = useAppDispatch();

	const { currentUser } = useAppSelector(state => state.singin);

	useEffect(() => {
		const user: BaseUser = JSON.parse(localStorage.getItem('sh-current'))
		// signOut(auth);
		// sessionStorage.removeItem('welcome')
		if (user) {
			dispatch(setLogin(true));

			if (user.name) {
				dispatch(setCurrentUser({ name: user.name, photoURL: user.photoURL }));
			}

			if (!sessionStorage.getItem('welcome')) {
				dispatch(setMessage(`Welcome ${user.name}`))
				dispatch(showAlert(true));

				setTimeout((): void => {
					dispatch(showAlert(false));
				}, 1000)
			}

			window.sessionStorage.setItem('welcome', 'true');
		}
	}, [])


	return (
		<React.Suspense fallback={<Loading />}>
			<Header />
			<div className="main">
					<Navbar />

					<Routes>
						<Route index element={<Home />} />
						<Route path="/latest" element={<>latest</>} />
						<Route path='/later' element={<>later</>} />
					</Routes>
			</div>



			{/* <Link style={{fontSize: '40px'}} to={AUTH_ROUTE}>SingIn</Link>
			<Link style={{fontSize: '40px'}} to={AUTH_REG_ROUTE}>SingUp</Link>
			<Link style={{fontSize: '40px'}} to={AUTH_FORGOT_ROUTE}>Forogot</Link>
			<Link style={{fontSize: '40px'}} to={AUTH_CHECK_ROUTE}>Check</Link>
			<Link style={{fontSize: '40px'}} to={AUTH_RESTORE_ROUTE}>Restore</Link>
			<Link style={{fontSize: '40px'}} to={AUTH_DATA_ROUTE}>Data</Link> */}
		</React.Suspense>
	)
}

export default Main;
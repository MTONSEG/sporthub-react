import React, { useEffect } from "react";
import './App.scss';
import { Route, Routes } from "react-router-dom";
import Main from "./containers/Main/Main";
import Auth from "./pages/Auth/Auth";
import { Alert } from "./ui/atoms/Alert/Alert";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setMessage, showAlert } from "../redux/slices/alert/alertSlice";
import { setLogin } from "../redux/slices/header/headerSlice";
import { setCurrentUser } from "../redux/slices/auth/singinSlice";

const App = () => {
	const auth = getAuth();
	const dispatch = useAppDispatch();
	const { currentUser } = useAppSelector(state => state.singin);

	useEffect(() => {
		// signOut(auth);
		// sessionStorage.removeItem('welcome')

		onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(setLogin(true))
				if (!sessionStorage.getItem('welcome')) {
					dispatch(setMessage(`Welcome ${user.displayName}`))
					dispatch(showAlert(true));

					setTimeout((): void => {
						dispatch(showAlert(false));
					}, 1000)
				}
				window.sessionStorage.setItem('welcome', 'true');

				if (!currentUser.name) {
					dispatch(setCurrentUser({ name: user.displayName, imageURL: user.photoURL }));
				}
			}
		});
	}, [])

	return (
		<div className="wrapper">
			<Routes>
				<Route index element={<Main />} />
				<Route path="/auth/*" element={<Auth />} />
			</Routes>
			<Alert />
		</div>
	)
}

export default App;
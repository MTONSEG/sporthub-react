import React, { useEffect } from "react";
import './App.scss';
import { Route, Routes} from "react-router-dom";
import Main from "./containers/Main/Main";
import Auth from "./pages/Auth/Auth";
import { Alert } from "./ui/atoms/Alert/Alert";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "../hooks/hooks";
import { setMessage, showAlert } from "../redux/slices/alert/alertSlice";

const App = () => {
	const auth = getAuth();
	const dispatch = useAppDispatch();

	onAuthStateChanged(auth, (user) => {
		if (user) {
			if (!sessionStorage.getItem('welcome')) {
				dispatch(setMessage(`Welcome ${user.displayName}`))
				dispatch(showAlert(true));

				setTimeout((): void => {
					dispatch(showAlert(false));
				}, 1000)

			}

			window.sessionStorage.setItem('welcome', 'true');
		}
	});

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
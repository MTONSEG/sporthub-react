import React from "react";
import './App.scss';
import { Route, Routes } from "react-router-dom";
import Main from "./containers/Main/Main";
import Auth from "./pages/Auth/Auth";
import { Alert } from "./ui/atoms/Alert/Alert";

const App = () => {
	// const dispatch = useAppDispatch();
	// const { currentUser } = useAppSelector(state => state.singin);

	// useEffect(() => {
	// 	const user: BaseUser = JSON.parse(localStorage.getItem('sh-current'))
	// 	// signOut(auth);
	// 	// sessionStorage.removeItem('welcome')
	// 	if (user) {
	// 		dispatch(setLogin(true));

	// 		if (user.name) {
	// 			dispatch(setCurrentUser({ name: user.name, photoURL: user.photoURL }));
	// 		}

	// 		if (!sessionStorage.getItem('welcome')) {
	// 			dispatch(setMessage(`Welcome ${user.name}`))
	// 			dispatch(showAlert(true));

	// 			setTimeout((): void => {
	// 				dispatch(showAlert(false));
	// 			}, 1000)
	// 		}

	// 		window.sessionStorage.setItem('welcome', 'true');
	// 	}
	// }, [])

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
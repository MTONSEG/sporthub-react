import React from "react";
import './App.scss';
import { Route, Routes } from "react-router-dom";
import Main from "./containers/Main/Main";
import Auth from "./pages/Auth/Auth";
import { Alert } from "./ui/atoms/Alert/Alert";

const PersonalAuth = React.lazy(() => import('./pages/Auth/PersonalAuth/PersonalAuth'));

const App = () => {
	console.log(localStorage.getItem('sporthub-user'));
	

	return (
		<div className="wrapper">
			<Routes>
				<Route index element={<Main/>} />
				<Route path="/auth/*" element={<Auth />} />
				{/* <Route path="/auth/personal" element={<PersonalAuth/>}/> */}
			</Routes>
			<Alert/>
		</div>
	)
}

export default App;
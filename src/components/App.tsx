import React from "react";
import './App.scss';
import { Route, Routes } from "react-router-dom";
import Main from "./containers/Main/Main";
import Auth from "./pages/Auth/Auth";
import { Alert } from "./ui/atoms/Alert/Alert";

const App = () => {
	return (
		<div className="wrapper">
			<Routes>
				<Route path='/*' element={<Main />} />
				<Route path="/auth/*" element={<Auth />} />
			</Routes>
			<Alert />
		</div>
	)
}

export default App;